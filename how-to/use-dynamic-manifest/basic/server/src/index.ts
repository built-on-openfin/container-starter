import express from "express";
import os from "node:os";
import { platform } from "node:process";
import path from "path";

const app = express();
const mainPath = path.join(__dirname, "..", "..", "public");
const port = 5050;

console.log(`Main Path / = ${mainPath}`);

app.get("/manifest", (req, res) => {
	const env = req.query.env;
	const plat = platform;
	console.log(`Your platform is: ${plat}`); // Gives you the overall Platform from node (Win32, Darwin for Mac, etc..)
	console.log(`Your OS is: ${os.type()}`); // Gives you the System type, which could be: Windows_NT, Cygwin, Ming, etc..
	console.log(`Your version is: ${os.release()}`); // Gives you the actual release # for the platform (i.e. 10.0.22621)

	if (plat && plat === "darwin") {
		// Launch Mac OS Manifest
		res.sendFile(path.join(__dirname, "../../public/mac.manifest.fin.json"));
	}

	if (plat && plat === "win32") {
		// Launch a Windows Manifest.
		if (os.type() === "Windows_NT") {
			// Windows 10/11
			res.sendFile(path.join(__dirname, "../../public/win.manifest.fin.json"));
		} else {
			// Windows 7 and other versions.
			res.sendFile(path.join(__dirname, "../../public/win7.manifest.fin.json"));
		}
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
