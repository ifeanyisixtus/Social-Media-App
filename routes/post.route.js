const { Router } = require("express");
const {
  fetchPosts,
  createPost,
  fetchSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");
const { validatePost } = require("../middlewares/validation.middleware");

const router = Router();

router.get("/", fetchPosts);
router.post("/", validatePost, createPost);
router.get("/:id", fetchSinglePost);
router.put("/:id", validatePost, updatePost);
router.delete("/:id", deletePost);

module.exports = router;
