import express from "express";
import {
  createComment,
  createPost,
  deletePost,
  getPosts,
  getPostsBySearch,
  getSinglePost,
  likePost,
  updatePost,
} from "../controllers/posts.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/:id", getSinglePost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, createComment);

export default router;
