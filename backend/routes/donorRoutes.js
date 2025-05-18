const express = require('express');
const router = express.Router();
const { getAllDonors,createDonor,updateDonor} = require('../controllers/donorController');

router.get('/', getAllDonors);
router.post('/',createDonor);
router.put('/:id',updateDonor);

module.exports = router;
