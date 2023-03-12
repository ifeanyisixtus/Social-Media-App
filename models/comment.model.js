const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: Types.ObjectId,
      ref: "Post",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
