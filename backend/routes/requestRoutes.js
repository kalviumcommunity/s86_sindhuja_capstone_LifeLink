const express = require('express');
const router = express.Router();
const { getAllRequests } = require('../controllers/requestController');

router.get('/', getAllRequests);

module.exports = router;
