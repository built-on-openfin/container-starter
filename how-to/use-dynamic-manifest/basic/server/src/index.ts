import express from "express";
import rateLimit from "express-rate-limit";
import path from "path";

const app = express();

// Disable X-Powered-By header for security
app.disable("x-powered-by");

// Configure rate limiting to prevent DoS attacks
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
	message: {
		error: "Too many requests from this IP, please try again later."
	},
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all requests
app.use(limiter);

const mainPath = path.join(__dirname, "..", "..", "public");
const port = 5050;

console.log(`Main Path / = ${mainPath}`);

app.get("/manifest", (req, res) => {
	const env = req.query.env;
	if (env === "dev") {
		res.json({
			licenseKey: "openfin-demo-license-key",
			runtime: {
				arguments: "--v=1 --inspect",
				version: "43.142.101.2"
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
				version: "43.142.101.2"
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

app.listen(port, () => {
	console.log("server is listening on port", port);
});
