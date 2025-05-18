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
  unitsDonated: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
