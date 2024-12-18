const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Create Quiz
router.post('/courses/:courseId/quizzes', quizController.createQuiz);

// Get Quizzes for a Course
router.get('/courses/:courseId/quizzes', quizController.getQuizzesForCourse);

// Get Quiz Details
router.get('/quizzes/:id', quizController.getQuizById);

// Submit Quiz
router.post('/quizzes/:id/submit', quizController.submitQuiz);

// Get Quiz Results
router.get('/quizzes/:id/results', quizController.getQuizResults);

module.exports = router;