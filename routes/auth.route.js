const { Router } = require("express");
const { login, logout } = require("../controllers/auth.controller");
const { validateLogin } = require("../middlewares/validation.middleware");

const router = Router();

router.post("/login", validateLogin, login);
router.get("/logout", logout);

module.exports = router;
