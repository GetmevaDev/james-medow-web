const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // You can define your custom routing here
    const parsedUrl = parse(req.url, true);

    // Set up the proxy
    if (parsedUrl.pathname.startsWith("/api")) {
      // Proxy API requests to another server
      const proxy = createProxyMiddleware({
        target: "https://chat.air.ai",
        changeOrigin: true,
      });

      proxy(req, res);
    } else {
      // Handle regular Next.js requests
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
