const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: [3, "username too short"],
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 8 },
    deleted: { type: Boolean, default: false },
    avatar: { type: String, required: true },
  },
  { timestamps: true }
);

// hash user password
userSchema.pre("save", async function (next) {
  const user = this;

  try {
    const salt = await bcrypt.genSalt(10);
    const pwdHash = await bcrypt.hash(this.password, salt);
    this.password = pwdHash;
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("User", userSchema);
