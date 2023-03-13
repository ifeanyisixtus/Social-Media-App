const express = require("express");
const database = require("./database");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const path = require("path");

const router = require("./routes");
const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

// base api
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome to my social media api",
  });
});

// routes
app.use("/api/v1", router);

// api documentation route
app.get("/api/v1/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// catch all other routes
app.get("/*", (req, res) => {
  res.status(200).send({
    success: true,
    message: "visit /api/v1/docs to view documentation",
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  database();
});
