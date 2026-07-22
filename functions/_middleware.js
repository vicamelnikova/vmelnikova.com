// Cloudflare Pages Function: Accept: text/markdown content negotiation.
//
// Serves the clean Markdown twin (.md) of a page when a client explicitly
// prefers it (e.g. Claude Code sends `Accept: text/markdown`), and advertises
// the twin via an HTTP `Link` header on the HTML response. Companion to the
// per-page `<link rel="alternate" type="text/markdown">` tags and /llms.txt.
//
// Ported from the reference handler in Evil Martians'
// "Making your site visible to LLMs" guide. Defensive by design: any error
// falls through to the unmodified static asset, so this can never break the
// site.

function parseAccept(accept) {
  if (!accept || !accept.trim()) return [{ type: "*/*", q: 1 }];
  return accept
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((item) => {
      const [type, ...params] = item.split(";").map((s) => s.trim());
      let q = 1;
      for (const p of params) {
        const eq = p.indexOf("=");
        if (eq < 0 || p.slice(0, eq).trim().toLowerCase() !== "q") continue;
        const n = parseFloat(p.slice(eq + 1));
        if (Number.isFinite(n)) q = n;
      }
      return { type: type.toLowerCase(), q };
    });
}

function qualityFor(entries, candidate) {
  const [primary] = candidate.split("/");
  let bestSpec = -1;
  let bestQ = 0;
  for (const { type, q } of entries) {
    const spec =
      type === candidate ? 3 : type === `${primary}/*` ? 2 : type === "*/*" ? 1 : -1;
    if (spec < 0) continue;
    if (spec > bestSpec || (spec === bestSpec && q > bestQ)) {
      bestSpec = spec;
      bestQ = q;
    }
  }
  return bestQ;
}

function hasExplicitType(entries, candidate) {
  return entries.some((e) => e.type === candidate && e.q > 0);
}

// Map a page request path to its Markdown twin path, or null if not a page.
function mdPathFor(pathname) {
  if (pathname.endsWith("/")) return pathname + "index.md";
  if (pathname.endsWith(".html")) return pathname.slice(0, -5) + ".md";
  if (pathname.endsWith(".md")) return null; // already markdown
  const lastSeg = pathname.slice(pathname.lastIndexOf("/") + 1);
  if (!lastSeg.includes(".")) return pathname + ".md"; // clean URL, e.g. /podcast/foo
  return null; // some other asset (.webp, .svg, .js, .css, .txt, ...)
}

export async function onRequest(context) {
  const { request, next } = context;

  try {
    const method = request.method.toUpperCase();
    if (method !== "GET" && method !== "HEAD") return next();

    const url = new URL(request.url);
    const mdPath = mdPathFor(url.pathname);
    if (!mdPath) return next(); // not a page — serve as-is

    const htmlLink = `<${url.pathname}>; rel="alternate"; type="text/html"`;
    const mdLink = `<${mdPath}>; rel="alternate"; type="text/markdown"`;

    const accept = parseAccept(request.headers.get("accept"));
    const mdQ = qualityFor(accept, "text/markdown");
    const htmlQ = qualityFor(accept, "text/html");

    // Client explicitly prefers Markdown → serve the twin if it exists.
    if (hasExplicitType(accept, "text/markdown") && mdQ >= htmlQ) {
      const mdRes = await next(new Request(new URL(mdPath, url.origin), request));
      if (mdRes && mdRes.status === 200) {
        const r = new Response(mdRes.body, mdRes);
        r.headers.set("Content-Type", "text/markdown; charset=utf-8");
        r.headers.set("Vary", "Accept");
        r.headers.set("Link", htmlLink);
        return r;
      }
      // No twin (404) → fall through to normal HTML below.
    }

    // Client accepts *something*, but neither HTML nor Markdown (and no
    // wildcard) → 406. The `some(q > 0)` guard means a client that merely
    // refused Markdown (e.g. `text/markdown;q=0`) still gets HTML, and a
    // real browser (which always accepts text/html or */*) never hits this.
    if (mdQ === 0 && htmlQ === 0 && accept.some((e) => e.q > 0)) {
      return new Response("Not Acceptable", {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
          Link: `${htmlLink}, ${mdLink}`,
        },
      });
    }

    // Default: serve the HTML, advertising the Markdown twin.
    const res = await next();
    const r = new Response(res.body, res);
    r.headers.append("Vary", "Accept");
    r.headers.set("Link", mdLink);
    return r;
  } catch (e) {
    // Never break the page on a negotiation bug.
    return next();
  }
}
