const express = require("express");
const path = require("path");
const router = express.Router();

// Database Collections/Models
const Room = require(path.join("..", "models", "Room"));

// All Rooms
router.get("/api/rooms", (_, res) => {
  Room.find({}, (err, data) => {
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

// Create room
router.post("/api/add-room", (req, res) => {
  const { roomCityId, roomName, roomCapacity } = req.body;
  const data = {
    roomCityId,
    roomName,
    roomCapacity,
    created_at: new Date(),
  };
  Room.create(data, (err) => {
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

// Update room using POST
router.post("/api/update-room", (req, res) => {
  const { roomId: _id, roomCityId, roomName, roomCapacity } = req.body;
  const filter = { _id };
  const data = {
    roomCityId,
    roomName,
    roomCapacity,
    created_at: new Date(),
  };
  Room.updateOne(filter, data, (err) => {
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

// Update room using PUT
router.put("/api/update-room", (req, res) => {
  const { roomId: _id, roomCityId, roomName, roomCapacity } = req.body;
  const filter = { _id };
  const data = {
    roomCityId,
    roomName,
    roomCapacity,
    created_at: new Date(),
  };
  Room.updateOne(filter, data, (err) => {
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

// Delete room using POST
router.post("/api/delete-room", (req, res) => {
  const { roomId: _id } = req.body;
  const filter = { _id };
  Room.deleteOne(filter, (err) => {
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

// Delete room using DELETE
router.delete("/api/delete-room", (req, res) => {
  const { roomId: _id } = req.body;
  const filter = { _id };
  Room.deleteOne(filter, (err) => {
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
