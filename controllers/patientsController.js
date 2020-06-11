const express = require("express");
const path = require("path");
const router = express.Router();

// Database Collections/Models
const Patient = require(path.join("..", "models", "Patient"));

// All Patients
router.get("/api/patients", (_, res) => {
  Patient.find({}, (err, data) => {
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

// Create patient
router.post("/api/add-patient", (req, res) => {
  const {
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
  } = req.body;
  const data = {
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
    created_at: new Date(),
  };
  Patient.create(data, (err) => {
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

// Update patient using POST
router.post("/api/update-patient", (req, res) => {
  const {
    patientId: _id,
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
  } = req.body;
  const filter = { _id };
  const data = {
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
    created_at: new Date(),
  };
  Patient.updateOne(filter, data, (err) => {
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

// Update patient using PUT
router.put("/api/update-patient", (req, res) => {
  const {
    patientId: _id,
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
  } = req.body;
  const filter = { _id };
  const data = {
    patientCityId,
    patientRoomId,
    patientCodename,
    patientFullname,
    patientAge,
    patientBirthday,
    patientAddress,
    patientContactNumber,
    patientEmail,
    patientStatus,
    created_at: new Date(),
  };
  Patient.updateOne(filter, data, (err) => {
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

// Delete patient using POST
router.post("/api/delete-patient", (req, res) => {
  const { patientId: _id } = req.body;
  const filter = { _id };
  Patient.deleteOne(filter, (err) => {
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

// Delete patient using DELETE
router.delete("/api/delete-patient", (req, res) => {
  const { patientId: _id } = req.body;
  const filter = { _id };
  Patient.deleteOne(filter, (err) => {
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
