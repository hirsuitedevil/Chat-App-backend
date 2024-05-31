import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import authController from "./controllers/authController.js";
import msgController from './controllers/msgController.js';
import userController from './controllers/userController.js';
import mongoose from "mongoose";
import cors from 'cors';
import uploadController from "./controllers/uploadController.js";
import bodyParser from "body-parser";
dotenv.config();
// const __dirname = path.resolve();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/auth", authController);
app.use("/messages", msgController);
app.use("/users", userController);
app.use("/upload", uploadController);
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error.message);
}
server.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
