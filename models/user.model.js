const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: { type: String, required: true, unique },
    password: { type: String, required: true, minLength: 8 },
    deleted: { type: Boolean, default: false },
    avatar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
