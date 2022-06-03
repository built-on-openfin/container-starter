import *  as express from "express";
import * as path from "path";

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(port, () => {
    console.log("server is listening on port", port);
});