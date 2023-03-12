const User = require("../models/user.model");

const { generateRandomAvatar } = require("../utils/generateAvatar");

class UserService {
  async fetchUser(id) {
    return User.findById(id).where("deleted").equals(false).select("-password");
  }

  async fetchAll() {
    return User.find({ deleted: false }).select("-password");
  }

  async create(newUser) {
    const { username, email, password } = newUser;

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      const { username, email, password } = newUser;
      const avatar = await generateRandomAvatar(email);

      return User.create({ username, email, password, avatar });
    }

    throw new Error("user already exist");
  }

  async update(id, reqBody) {
    const user = await this.fetchUser(id);

    if (user) {
      if (JSON.stringify(reqBody) === "{}") {
        throw new Error("please provide a field to update");
      } else {
        const avatar = await generateRandomAvatar(user.email);

        return User.findByIdAndUpdate(id, { ...reqBody, avatar });
      }
    }

    throw new Error("user does not exist");
  }

  async delete(id) {
    const user = await this.fetchUser(id);

    if (user) return User.findByIdAndUpdate(id, { deleted: true });

    throw new Error("user does not exist");
  }
}

module.exports = new UserService();
