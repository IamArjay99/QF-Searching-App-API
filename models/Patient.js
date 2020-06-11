const mongoose = require("mongoose");
require("./Database");

// Schema and Model
const patientSchema = new mongoose.Schema(
  {
    patientCityId: { type: mongoose.ObjectId, required: true },
    patientRoomId: { type: mongoose.ObjectId, required: true },
    patientCodename: String,
    patientFullname: { type: String, required: true },
    patientAge: Number,
    patientBirthday: Date,
    patientAddress: String,
    patientContactNumber: String,
    patientEmail: String,
    patientStatus: { type: String, required: true },
    created_at: Date,
  },
  {
    collection: "Patients",
  }
);
const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
