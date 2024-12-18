const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Create Course
router.post('/', courseController.createCourse);

// Get All Courses
router.get('/', courseController.getAllCourses);

// Get Course Details
router.get('/:id', courseController.getCourseById);

// Update Course
router.put('/:id', courseController.updateCourse);

// Delete Course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;