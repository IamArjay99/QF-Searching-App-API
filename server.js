const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

var app = express();

// Port
const PORT = process.env.PORT || 5000;

// Middleware
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

const roomsController = require("./controllers/roomsController");
const citiesController = require("./controllers/citiesController.js");
const needsController = require("./controllers/needsController.js");
const patientsController = require("./controllers/patientsController.js");

app.get("/", (_, res) => {
  const pathFile = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(pathFile);
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

app.use([
  roomsController,
  citiesController,
  needsController,
  patientsController,
]);
