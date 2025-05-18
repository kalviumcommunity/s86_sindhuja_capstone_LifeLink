const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  unitsRequired: {
    type: Number,
    required: true
  },
  hospital: {
    type: String,
    required: true
  },
  requestDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
