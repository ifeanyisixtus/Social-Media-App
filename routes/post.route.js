const { Router } = require("express");
const {
  fetchPosts,
  createPost,
  fetchSinglePost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

const router = Router();

router.get("/", fetchPosts);
router.post("/", createPost);
router.get("/:id", fetchSinglePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
