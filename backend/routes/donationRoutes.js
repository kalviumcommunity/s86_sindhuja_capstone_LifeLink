const express = require('express');
const router = express.Router();
const { getAllDonations } = require('../controllers/donationController');

router.get('/', getAllDonations);

module.exports = router;
