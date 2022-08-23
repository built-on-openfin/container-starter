import express from "express";
import multer from "multer";
import path from "path";
const app = express();

/** COMMON SERVER CONFIGURATION */
const mainPath = path.join(__dirname, "..", "..", "public");
const commonPath = path.join(__dirname, "..", "..", "..", "common", "public");
const port = 5050;
console.log(`Main Path / = ${mainPath}`);
console.log(`Common Path /common = ${commonPath}`);
console.log("Root path checks both the main and common directories.");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(mainPath));
app.use("/common", express.static(commonPath));

/** LOGGING SERVER CONFIGURATION */
const APP_LOG_DESTINATION = path.join(mainPath, "uploads/", "applogs");
const RUNTIME_DEBUG_LOG_DESTINATION = path.join(mainPath, "uploads/", "runtimelogs");
const RUNTIME_DEBUG_LOG_ENDPOINT = "/upload";
const APP_LOG_ENDPOINT = "/api/v1/logs";

const multerStorage = multer.diskStorage({
	destination: (_req, file, cb) => {
		if (file.fieldname === "logFile") {
			console.log({ message: `Saving application log to ${APP_LOG_DESTINATION}` });
			cb(null, APP_LOG_DESTINATION);
		} else {
			console.log({ message: `Saving runtime debug log to ${RUNTIME_DEBUG_LOG_DESTINATION}` });
			cb(null, RUNTIME_DEBUG_LOG_DESTINATION);
		}
	},
	filename: (_req, file, cb) => {
		if (file.fieldname === "file") {
			cb(null, `debug-${file.fieldname}-${Date.now()}.log`);
		} else if (file.fieldname === "logFile") {
			cb(null, `app-${file.fieldname}-${Date.now()}.zip`);
		}
	}
});

const upload = multer({ storage: multerStorage });

app.route(RUNTIME_DEBUG_LOG_ENDPOINT).post(upload.single("file"), async (req, res) => {
	console.log({
		message: `Received debug log post request from application: ${req.body.uuid}`,
		payload: req.file
	});
	res.json(req.file);
});

app.route(APP_LOG_ENDPOINT).post(upload.single("logFile"), (req, res) => {
	res.statusCode = 200;
	console.log({
		message: "Received app log post request from RVM",
		payload: { file: req.file, body: { ...req.body } }
	});
});

app.listen(port, () => {
	console.log("server is listening on port", port);
});
