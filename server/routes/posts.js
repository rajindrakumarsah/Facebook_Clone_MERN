import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//creating the rooutes of post

/* READ */
//show all post in home page
router.get("/", verifyToken, getFeedPosts);

//showing only particular user
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */ //when we click on like button , it will be update
router.patch("/:id/like", verifyToken, likePost);

export default router;
