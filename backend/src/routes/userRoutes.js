const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get User Profile
router.get('/me', userController.getAllUsers);

// Update User Profile
router.put('/me', userController.updateUser);

// Get Teacher Profile
router.get('/:id', userController.getUserById);

module.exports = router;