const express = require("express");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const path = require("path");
const app = express();

app.use(history());
app.use(serveStatic(path.join(__dirname + "/dist/spa")));

app.listen(process.env.PORT || 5000, () => console.log("Server online"));
