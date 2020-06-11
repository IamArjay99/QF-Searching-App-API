const express = require("express");
const path = require("path");
const router = express.Router();

// Database Collections/Models
const City = require(path.join("..", "models", "City"));

// All Cities
router.get("/api/cities", (_, res) => {
  City.find({}, (err, data) => {
    if (err) {
      res.json({
        status: "failed",
      });
    } else {
      res.json({
        status: "success",
        data,
      });
    }
  });
});

// Create City
router.post("/api/add-city", (req, res) => {
  const { cityName } = req.body;
  const data = {
    cityName,
    created_at: new Date(),
  };
  City.create(data, (err) => {
    if (err) {
      res.json({
        status: "failed",
        data: req.body,
      });
    } else {
      res.json({
        status: "success",
        data,
      });
    }
  });
});

// Update City using POST
router.post("/api/update-city", (req, res) => {
  const { cityId: _id, cityName } = req.body;
  const filter = { _id };
  const data = {
    cityName,
    created_at: new Date(),
  };
  City.updateOne(filter, data, (err) => {
    if (err) {
      res.json({
        status: "failed",
        data: req.body,
      });
    } else {
      res.json({
        status: "success",
        data,
      });
    }
  });
});

// Update City using PUT
router.put("/api/update-city", (req, res) => {
  const { cityId: _id, cityName } = req.body;
  const filter = { _id };
  const data = {
    cityName,
    created_at: new Date(),
  };
  City.updateOne(filter, data, (err) => {
    if (err) {
      res.json({
        status: "failed",
        data: req.body,
      });
    } else {
      res.json({
        status: "success",
        data,
      });
    }
  });
});

// Delete City using POST
router.post("/api/delete-city", (req, res) => {
  const { cityId: _id } = req.body;
  const filter = { _id };
  City.deleteOne(filter, (err) => {
    if (err) {
      res.json({
        status: "failed",
        data: req.body,
      });
    } else {
      res.json({
        status: "success",
        data: filter,
      });
    }
  });
});

// Delete City using DELETE
router.delete("/api/delete-city", (req, res) => {
  const { cityId: _id } = req.body;
  const filter = { _id };
  City.deleteOne(filter, (err) => {
    if (err) {
      res.json({
        status: "failed",
        data: req.body,
      });
    } else {
      res.json({
        status: "success",
        data: _id,
      });
    }
  });
});

module.exports = router;
