import *  as express from "express";
import * as path from "path";
const app = express();
app.use(express.static(path.join(__dirname, '../../public')));
const port = 8080;

app.listen(port, () => {
    console.log("server is listening on port", port);
});