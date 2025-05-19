
const Request = require('../models/Request');

const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('requestedBy');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createRequest = async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateRequest = async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRequest) return res.status(404).json({ message: 'Request not found' });
    res.json(updatedRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllRequests, createRequest, updateRequest };

