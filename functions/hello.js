// functions/hello.js
export async function onRequest(context) {
  return new Response("你好！這是來自 Cloudflare Functions 的動態回應！");
}
