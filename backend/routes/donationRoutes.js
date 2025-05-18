const express = require('express');
const router = express.Router();
const { getAllDonations,createDonation,updateDonation } = require('../controllers/donationController');

router.get('/', getAllDonations);
router.post('/',createDonation);
router.put('/:id',updateDonation);

module.exports = router;
