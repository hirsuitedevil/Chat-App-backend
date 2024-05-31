import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import Conversation from "../models/Conversation.js";
import User from "../models/User.js";
const userController = express.Router();


userController.get("/", verifyToken, async (req, res) => {
  try {
    const loggedInUserId = req.user.id;
    const userConversations = await Conversation.find({
      participants: { $in: [loggedInUserId] },
    });
    res.status(200).json(userConversations);
  } catch (error) {
    console.error("Error in getting user conversations:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

userController.get("/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password"); // Exclude the password field
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getting user details:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default userController;
