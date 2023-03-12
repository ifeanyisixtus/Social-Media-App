const { Router } = require("express");
const {
  findUsers,
  createUser,
  fetchSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", findUsers);
router.get("/", createUser);
router.get("/:id", fetchSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
