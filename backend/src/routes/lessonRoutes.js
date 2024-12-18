const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Add Lesson
router.post('/courses/:courseId/lessons', lessonController.createLesson);

// Get Lessons for a Course
router.get('/courses/:courseId/lessons', lessonController.getAllLessons);

// Get Lesson Details
router.get('/lessons/:id', lessonController.getLessonById);

// Update Lesson
router.put('/lessons/:id', lessonController.updateLesson);

// Delete Lesson
router.delete('/lessons/:id', lessonController.deleteLesson);

module.exports = router;