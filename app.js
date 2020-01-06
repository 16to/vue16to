const express = require("express");
const http = require("http");
const path = require("path");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const proxyMiddleWare = require("http-proxy-middleware");

// node server port
const PORT = 3000;
const app = express();
app.use(bodyparser.json());
app.use(cookieParser());

const httpServer = http.createServer(app);

// set api
app.use(
    "/api",
    proxyMiddleWare({
        target: 'http://localhost:3001',
        changeOrigoin: true,
        pathRewrite: { "^/api": "/16to" }
    })
);

// set dist
app.use(express.static(path.join(__dirname, "./dist")));

// set index
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

// bind port
httpServer.listen(PORT, () => {
    console.log(`http start port:${PORT}`);
});
