// Custom Node server that runs Next.js + Socket.IO on the same port.
// Run with: npm run dev:rt  (or: node server.js)
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { initRealtimeServer } = require("./realtime/server");

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  initRealtimeServer(httpServer);

  httpServer.listen(port, () => {
    console.log(`▲ Next.js + Socket.IO ready on http://localhost:${port}`);
    console.log(`  WebSocket path: /api/socket`);
  });
});
