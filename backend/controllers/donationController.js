

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createDonation = async (req, res) => {
  try {
    const newDonation = new Donation(req.body);
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateDonation = async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonation) return res.status(404).json({ message: 'Donation not found' });
    res.json(updatedDonation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllDonations, createDonation, updateDonation };