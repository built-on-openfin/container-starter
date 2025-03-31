import express, { type Request, type Response } from "express";
import multer, { type StorageEngine } from "multer";
import path from "path";

const app = express();

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Configure Multer
const storage: StorageEngine = multer.diskStorage({
	destination: (
		req: Request,
		file: Express.Multer.File,
		cb: (error: Error | null, destination: string) => void
	) => {
		cb(null, "uploads/"); // Save files in 'uploads' folder
	},
	filename: (
		req: Request,
		file: Express.Multer.File,
		cb: (error: Error | null, filename: string) => void
	) => {
		cb(null, `${Date.now()}-${file.originalname}`); // Unique filenames
	}
});

const upload = multer({ storage });

// Create the POST endpoint and use the multer middleware method upload
app.post("/api/upload", upload.single("file"), (req: Request, res: Response) => {
	res.json(req.file);
	console.log(req.file);
});

// Create a test GET endpoint
app.get("/api/test", (req: Request, res: Response) => {
	res.json({ message: "Hello, World!" });
});

// Start express server
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
