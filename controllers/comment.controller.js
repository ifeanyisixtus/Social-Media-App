const commentService = require("../services/comment.service");

const fetchComments = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await commentService.fetchAll(postId);

    return res.status(200).json({ success: true, comments });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const fetchSingleComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const postId = req.params.postId;

    const comment = await commentService.fetchOne(postId, commentId);

    if (!comment) {
      return res.status(401).json({ error: "comment does not exist" });
    }

    return res.status(200).json({ success: true, comment });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;

    const comment = await commentService.create(req.body, userId, postId);

    return res
      .status(200)
      .json({ success: true, message: "comment created successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.id;
    const userId = req.user.id;

    const post = await commentService.update(
      req.body,
      userId,
      postId,
      commentId
    );

    return res
      .status(200)
      .json({ success: true, message: "comment updated successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.id;
    const userId = req.user.id;

    const comment = await commentService.delete(userId, postId, commentId);

    return res
      .status(200)
      .json({ success: true, message: "comment deleted successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  fetchComments,
  fetchSingleComment,
  createComment,
  updateComment,
  deleteComment,
};
