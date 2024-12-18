const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

// Enroll in a Course
router.post('/', enrollmentController.enrollInCourse);

// Get Enrollments
router.get('/', enrollmentController.getEnrollments);

// Get Enrollment Progress
router.get('/:courseId', enrollmentController.getEnrollmentProgress);

// Mark Lesson as Completed
router.post('/:courseId/lessons/:lessonId/complete', enrollmentController.markLessonAsCompleted);

module.exports = router;