const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Use .env file
dotenv.config({
  path: ".env",
});

// Database Connection
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const databaseConnection = mongoose.connect(
  process.env.MONGO_URI,
  connectionOptions,
  (err) => {
    if (err) console.log("Connection failed... " + err);
    else console.log("Successfully Connected to Database");
  }
);

module.exports = databaseConnection;
