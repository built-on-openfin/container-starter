"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
const port = 8080;
app.listen(port, () => {
    console.log("server is listening on port", port);
});
//# sourceMappingURL=index.js.map