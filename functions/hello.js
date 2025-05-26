export async function onRequest() {
  return new Response("嗷嗷～這是 Cloudflare Functions 動態回應～", {
    headers: { "Content-Type": "text/plain" },
  });
}
