const mongoose = require("mongoose");
require("./Database");

// Schema and Model
const roomSchema = new mongoose.Schema(
  {
    roomCityId: { type: mongoose.ObjectId, required: true },
    roomName: { type: String, required: true },
    roomCapacity: { type: Number, required: true },
    created_at: Date,
  },
  {
    collection: "Rooms",
  }
);
const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
