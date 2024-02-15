import express from "express";
import path from "path";
import { platform } from 'node:process';

const app = express();

const mainPath = path.join(__dirname, "..", "..", "public");
const macManifest = require(mainPath + '/mac.manifest.fin.json');
const windowsManifest = require(mainPath + '/win.manifest.fin.json');
const port = 5050;

console.log(`Main Path / = ${mainPath}`);

app.get("/manifest", (req, res) => {
	const env = req.query.env;
	const os = platform;
	console.log(`Your platform is: ${os}`);

	if (os && os === 'darwin') {
		// Launch Mac OS Manifest
		res.json(macManifest);
	}

	if (os && os === 'win32') {
		// Launch Windows Manifest.
		res.json(windowsManifest);
	}

});

app.get("/html/app-dev.html", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/html/app-dev.html"));
});

app.get("/html/app-staging.html", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/html/app-staging.html"));
});

app.get("/favicon.ico", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/favicon.ico"));
});

app.use(express.static(mainPath));

app.listen(port, () => {
	console.log("server is listening on port", port);
});
