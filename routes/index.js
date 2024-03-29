const { Router } = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const postRoute = require("./post.route");
const AuthGuard = require("../middlewares/auth.middleware");

const router = Router();

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/posts", AuthGuard, postRoute);

module.exports = router;
