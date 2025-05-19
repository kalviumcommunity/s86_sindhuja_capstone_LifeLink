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
  contact: String,
  status: {
    type: String,
    enum: ['pending', 'fulfilled', 'cancelled'],
    default: 'pending',
  },
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor', 
  },
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
