export async function onRequest() {
  return new Response("Cloudflare Functions 正常回應", {
    headers: { "Content-Type": "text/plain" },
  });
}
