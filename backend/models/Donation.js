const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donor',
    required: true
  },
  donationDate: {
    type: Date,
    default: Date.now
  },
  bloodGroup: String,
  volume: Number,
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
  },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
