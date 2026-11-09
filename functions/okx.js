export async function onRequest(context) {
  const req = context.request;
  const url = new URL(req.url);
  const target = "https://www.okx.com" + url.pathname + url.search;
  const r = await fetch(target, { method: req.method, headers: req.headers, body: req.body });
  return new Response(r.body, { status: r.status, headers: r.headers });
}