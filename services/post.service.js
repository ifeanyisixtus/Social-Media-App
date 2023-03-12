const Post = require("../models/post.model");

class PostService {
  async fetchOne(postId) {
    return Post.findOne({ $and: [{ _id: postId }, { deleted: false }] });
  }
  async fetchAll() {
    return Post.find({ deleted: false }).sort({ createdAt: "desc" });
  }

  async create(reqBody, userId) {
    return Post.create({ ...reqBody, owner: userId });
  }

  async update(reqBody, userId, postId) {
    const post = await this.fetchOne(postId);

    if (!post) throw new Error("post does not exist");

    if (!(post.owner == userId)) throw new Error("unathorized to edit post");

    return Post.findByIdAndUpdate(postId, { ...reqBody });
  }

  async delete(userId, postId) {
    const post = await this.fetchOne(postId);

    if (!post) throw new Error("post does not exist");

    if (!(post.owner == userId)) throw new Error("unathorized to delete post");

    return Post.findByIdAndUpdate(postId, { deleted: true });
  }
}

module.exports = new PostService();
