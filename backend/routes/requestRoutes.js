const express = require('express');
const router = express.Router();
const { getAllRequests ,createRequest} = require('../controllers/requestController');

router.get('/', getAllRequests);
router.get('/',createRequest);

module.exports = router;
