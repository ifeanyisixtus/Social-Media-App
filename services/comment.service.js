const Comment = require("../models/comment.model");

class CommentService {
  async fetchOne(postId, commentId) {
    return Comment.findOne({
      $and: [{ _id: commentId }, { deleted: false }, { postId }],
    });
  }
  async fetchAll(postId) {
    return Comment.find({ $and: [{ deleted: false }, { postId }] }).sort({
      createdAt: "desc",
    });
  }

  async create(reqBody, userId, postId) {
    return Comment.create({ ...reqBody, owner: userId, postId });
  }

  async update(reqBody, userId, postId, commentId) {
    const comment = await this.fetchOne(postId, commentId);

    if (!comment) throw new Error("comment does not exist");

    if (!(comment.owner == userId))
      throw new Error("unathorized to edit comment");

    return Comment.findByIdAndUpdate(commentId, { ...reqBody });
  }

  async delete(userId, postId, commentId) {
    const comment = await this.fetchOne(postId, commentId);

    if (!comment) throw new Error("comment does not exist");

    if (!(comment.owner == userId))
      throw new Error("unathorized to delete comment");

    return Comment.findByIdAndUpdate(commentId, { deleted: true });
  }
}

module.exports = new CommentService();
