const express = require("express");
const cors = require("cors");
const database = require("./database");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// base api
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to my social media api",
  });
});

// routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
// app.use("/posts/:postId/comments");

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  database();
});
