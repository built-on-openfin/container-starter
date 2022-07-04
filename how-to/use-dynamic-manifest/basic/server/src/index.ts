import express from "express";
import path from "path";

const app = express();

const mainPath = path.join(__dirname, "..", "..", "public");
const commonPath = path.join(__dirname, "..", "..", "..", "..", "common", "public");
const port = 5050;

console.log(`Main Path / = ${mainPath}`);
console.log(`Common Path /common = ${commonPath}`);
console.log("Root path checks both the main and common directories.");

app.get("/manifest", (req, res) => {
	const env = req.query.env;
	if (env === "dev") {
		res.json({
			licenseKey: "openfin-demo-license-key",
			runtime: {
				arguments: "--v=1 --inspect",
				version: "26.102.70.16"
			},
			platform: {
				uuid: "how-to-use-dynamic-manifest-basic",
				autoShow: false,
				icon: "http://localhost:5050/favicon.ico",
				preloadScripts: [],
				defaultWindowOptions: {
					preloadScripts: []
				},
				defaultViewOptions: {
					preloadScripts: []
				}
			},
			snapshot: {
				windows: [
					{
						layout: {
							content: [
								{
									type: "stack",
									id: "no-drop-target",
									content: [
										{
											type: "component",
											componentName: "view",
											componentState: {
												processAffinity: "ps_1",
												url: "http://localhost:5050/html/app-dev.html"
											}
										}
									]
								}
							]
						}
					}
				]
			}
		});
	} else {
		res.json({
			licenseKey: "openfin-demo-license-key",
			runtime: {
				arguments: "--v=1 --inspect",
				version: "26.102.70.16"
			},
			platform: {
				uuid: "how-to-use-dynamic-manifest-basic",
				autoShow: false,
				icon: "http://localhost:5050/favicon.ico",
				preloadScripts: [],
				defaultWindowOptions: {
					preloadScripts: []
				},
				defaultViewOptions: {
					preloadScripts: []
				}
			},
			snapshot: {
				windows: [
					{
						layout: {
							content: [
								{
									type: "stack",
									id: "no-drop-target",
									content: [
										{
											type: "component",
											componentName: "view",
											componentState: {
												processAffinity: "ps_1",
												url: "http://localhost:5050/html/app-staging.html"
											}
										}
									]
								}
							]
						}
					}
				]
			}
		});
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
app.use("/common", express.static(commonPath));

app.listen(port, () => {
	console.log("server is listening on port", port);
});
