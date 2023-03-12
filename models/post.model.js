const mongoose = require("mongoose");
const { Types } = mongoose;

const postSchema = new mongoose.Schema(
  {
    owner: {
      type: Types.ObjectId,
      ref: "User",
    },
    title: { type: String },
    description: { type: String, required: true },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
