import multer from 'multer';
import express from 'express';
const uploadController = express.Router();
import fis from 'fs';
const fs = fis.promises;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

uploadController.post("/image", upload.single("image"), async (req, res) => {
  try {
    return res.status(200).json("File uploaded");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error uploading file");
  }
});


export default uploadController;
