const express = require('express');
const router = express.Router();
const { getAllDonors,createDonor } = require('../controllers/donorController');

router.get('/', getAllDonors);
router.post('/',createDonor);

module.exports = router;
