const express = require("express");
const cors = require("cors");
const database = require("./database");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// base api
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to my social media api",
  });
});

// routes
app.use("/api/v1", router);

// app.use("/posts/:postId/comments");

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  database();
});
