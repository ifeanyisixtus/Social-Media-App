const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    title: { type: String },
    body: { type: String, required: true },

    email: { type: String, required: true, unique },
    password: { type: String, required: true, minLength: 8 },
    deleted: { type: Boolean, default: false },
    avatar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
