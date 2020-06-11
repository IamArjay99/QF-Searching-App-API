const mongoose = require("mongoose");
require("./Database");

// Schema and Model
const citySchema = new mongoose.Schema(
  {
    cityName: { type: String, required: true, unique: true },
    created_at: Date,
  },
  {
    collection: "Cities",
  }
);
const City = mongoose.model("City", citySchema);

module.exports = City;
