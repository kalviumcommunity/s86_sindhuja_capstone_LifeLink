const express = require('express');
const router = express.Router();
const { getAllRequests ,createRequest,updateRequest} = require('../controllers/requestController');

router.get('/', getAllRequests);
router.get('/',createRequest);
router.get('/:id',updateRequest);

module.exports = router;
