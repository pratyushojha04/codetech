const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Add Review
router.post('/courses/:courseId/reviews', reviewController.addReview);

// Get Reviews for a Course
router.get('/courses/:courseId/reviews', reviewController.getReviewsForCourse);

module.exports = router;