import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../../public")));
const port = 5050;

app.listen(port, () => {
	console.log("server is listening on port", port);
});
