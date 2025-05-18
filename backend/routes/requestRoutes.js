const express = require('express');
const router = express.Router();
const { getAllRequests ,createRequest,updateRequest} = require('../controllers/requestController');

router.get('/', getAllRequests);
router.post('/',createRequest);
router.put('/:id',updateRequest);

module.exports = router;
