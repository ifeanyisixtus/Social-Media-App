const { Router } = require("express");
const {
  findUsers,
  createUser,
  fetchSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { validateSignup } = require("../middlewares/validation.middleware");
const AuthGuard = require("../middlewares/auth.middleware");

const router = Router();

router.get("/", AuthGuard, findUsers);
router.post("/", validateSignup, createUser);
router.get("/:id", AuthGuard, fetchSingleUser);
router.put("/:id", AuthGuard, updateUser);
router.delete("/:id", AuthGuard, deleteUser);

module.exports = router;
