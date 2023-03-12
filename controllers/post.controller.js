const postService = require("../services/post.service");

const fetchPosts = async (req, res) => {
  try {
    const posts = await postService.fetchAll();

    return res.status(200).json({ success: true, posts });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const fetchSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await postService.fetchOne(postId);

    if (!post) {
      return res.status(401).json({ error: "post does not exist" });
    }

    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const userId = req.user.id;

    const post = await postService.create(req.body, userId);

    return res
      .status(200)
      .json({ success: true, message: "post created successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await postService.update(req.body, userId, postId);

    return res
      .status(200)
      .json({ success: true, message: "post updated successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await postService.delete(userId, postId);

    return res
      .status(200)
      .json({ success: true, message: "post deleted successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  fetchPosts,
  createPost,
  fetchSinglePost,
  updatePost,
  deletePost,
};
