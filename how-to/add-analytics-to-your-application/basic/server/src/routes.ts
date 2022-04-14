import * as express from "express";

const router = express.Router();
export default router;


/**
 * Serve all files in the 'public' directory.
 */
router.get("*", express.static("public"));