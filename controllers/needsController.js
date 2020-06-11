const express = require("express");
const path = require("path");
const router = express.Router();

// Database Collections/Models
const Need = require(path.join("..", "models", "Need"));

// All Needs
router.get("/api/needs", (_, res) => {
  Need.find({}, (err, data) => {
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

// Create need
router.post("/api/add-need", (req, res) => {
  const { needCityId, needName, needStock } = req.body;
  const data = {
    needCityId,
    needName,
    needStock,
    created_at: new Date(),
  };
  Need.create(data, (err) => {
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

// Update need using POST
router.post("/api/update-need", (req, res) => {
  const { needId: _id, needCityId, needName, needStock } = req.body;
  const filter = { _id };
  const data = {
    needCityId,
    needName,
    needStock,
    created_at: new Date(),
  };
  Need.updateOne(filter, data, (err) => {
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

// Update need using PUT
router.put("/api/update-need", (req, res) => {
  const { needId: _id, needCityId, needName, needStock } = req.body;
  const filter = { _id };
  const data = {
    needCityId,
    needName,
    needStock,
    created_at: new Date(),
  };
  Need.updateOne(filter, data, (err) => {
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

// Delete need using POST
router.post("/api/delete-need", (req, res) => {
  const { needId: _id } = req.body;
  const filter = { _id };
  Need.deleteOne(filter, (err) => {
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

// Delete need using DELETE
router.delete("/api/delete-need", (req, res) => {
  const { needId: _id } = req.body;
  const filter = { _id };
  Need.deleteOne(filter, (err) => {
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

module.exports = router;
