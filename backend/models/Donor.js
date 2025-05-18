const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  lastDonationDate: {
    type: Date
  }
}, { timestamps: true });

const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;
