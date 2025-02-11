const express = require('express');
const path = require('path');

const app = express();

const multer  = require('multer');

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {     
      cb(null, "uploads/"); // Save files in 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filenames        
    },
  });

const upload = multer({ storage });

// create the POST endpoint and use the multer middleware method upload
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.json(req.file);
    console.log(req.file);
});    

// start express server
app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})