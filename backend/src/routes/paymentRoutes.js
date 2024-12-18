const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Initiate Payment
router.post('/', paymentController.initiatePayment);

// Verify Payment
router.post('/verify', paymentController.verifyPayment);

// Get Payment History
router.get('/', paymentController.getPaymentHistory);

module.exports = router;