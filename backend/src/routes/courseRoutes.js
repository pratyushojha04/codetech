const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const loginRequired = require('../middlewares/loginRequired');
const roleRequired = require('../middlewares/roleRequired');




// Create Course
router.post('/',  roleRequired('teacher'),courseController.createCourse);

// Get All Courses
router.get('/', courseController.getAllCourses);

// Get Course Details
router.get('/:id', courseController.getCourseById);

// Update Course
router.put('/:id',  roleRequired('teacher'),courseController.updateCourse);

// Delete Course
router.delete('/:id',  roleRequired('teacher'),courseController.deleteCourse);

module.exports = router;