const userService = require("../services/user.service");

const findUsers = async (req, res) => {
  try {
    const users = await userService.fetchAll();

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const fetchSingleUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userService.fetchUser(userId);

    if (user) {
      // create an image using avatar urrl
      const image = `<img src="${user.avatar}" alt="${user.username} image" />`;

      return res
        .status(200)
        .json({ success: true, user: { ...user._doc, image } });
    }

    return res.status(401).json({ message: "user not found" });
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.create(req.body);

    return res
      .status(201)
      .json({ success: true, message: "user created successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userService.update(userId, req.body);

    return res
      .status(201)
      .json({ success: true, message: "user updated successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await userService.delete(userId);

    return res
      .status(200)
      .json({ success: true, message: "user deleted successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  findUsers,
  fetchSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
