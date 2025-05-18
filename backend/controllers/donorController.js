
const Donor = require('../models/Donor');

const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createDonor = async (req, res) => {
  try {
    const newDonor = new Donor(req.body);
    await newDonor.save();
    res.status(201).json(newDonor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonor) return res.status(404).json({ message: 'Donor not found' });
    res.json(updatedDonor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllDonors, createDonor, updateDonor };

