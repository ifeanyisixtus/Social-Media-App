const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbUrl = process.env.DATABASE_URL;

function database() {
  mongoose
    .set("strictQuery", true)
    .connect(dbUrl, {
      dbName: "hotel-management",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.error(err.message);
    });
}

module.exports = database;
