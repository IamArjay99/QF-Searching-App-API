const mongoose = require("mongoose");
require("./Database");

const needSchema = new mongoose.Schema(
  {
    needCityId: { type: mongoose.ObjectId, required: true },
    needName: { type: String, required: true },
    needStock: { type: Number, required: true },
    created_at: Date,
  },
  {
    collection: "Needs",
  }
);
const Need = mongoose.model("Need", needSchema);

module.exports = Need;
