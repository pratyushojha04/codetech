const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Get Notifications
router.get('/', notificationController.getNotifications);

// Mark Notification as Read
router.post('/:id/read', notificationController.markNotificationAsRead);

module.exports = router;