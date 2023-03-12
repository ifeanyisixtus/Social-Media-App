const { Router } = require("express");
const {
  fetchComments,
  createComment,
  fetchSingleComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment.controller");
const {
  fetchPosts,
  createPost,
  fetchSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");
const {
  validatePost,
  validateComment,
} = require("../middlewares/validation.middleware");

const router = Router();

router.get("/", fetchPosts);
router.post("/", validatePost, createPost);
router.get("/:id", fetchSinglePost);
router.put("/:id", validatePost, updatePost);
router.delete("/:id", deletePost);

// routes for handling post comments
router.get("/:postId/comments", fetchComments);
router.post("/:postId/comments", validateComment, createComment);
router.get("/:postId/comments/:id", fetchSingleComment);
router.put("/:postId/comments/:id", validateComment, updateComment);
router.delete("/:postId/comments/:id", deleteComment);

module.exports = router;
