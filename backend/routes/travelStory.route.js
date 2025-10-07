import express from "express"
import { verifyToken } from "../utils/varifyUser.js"
import { addTravelStory, deleteImage, getAllTravelStory, imageUpload } from "../controllers/travelStory.controller.js"
import upload from "../multer.js"


const router = express.Router()

router.post("/add", verifyToken, addTravelStory)

router.get("/get-all", verifyToken, getAllTravelStory)

router.post("/image-upload", upload.single("image"), imageUpload)

router.delete("/delete-image", deleteImage)
 
export default router