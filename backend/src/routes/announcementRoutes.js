const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

// Create Announcement
router.post('/courses/:courseId/announcements', announcementController.createAnnouncement);

// Get Announcements for a Course
router.get('/courses/:courseId/announcements', announcementController.getAnnouncementsForCourse);

// Delete Announcement
router.delete('/announcements/:id', announcementController.deleteAnnouncement);

module.exports = router;