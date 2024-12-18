const Review = require('../models/Review'); // Adjust the path as necessary

// Add Review
const addReview = async (req, res) => {
    const { courseId } = req.params;
    const { reviewText, rating } = req.body;

    try {
        // Create a new review instance
        const newReview = new Review({
            courseId,
            reviewText,
            rating,
            createdAt: new Date(),
        });

        // Save the review to the database
        await newReview.save();
        res.status(201).json({ message: 'Review added successfully.', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Error adding review.', error: error.message });
    }
};

// Get Reviews for a Course
const getReviewsForCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        // Retrieve reviews for the specified course
        const reviews = await Review.find({ courseId });
        res.status(200).json({ message: `Reviews for course ${courseId}.`, reviews });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving reviews.', error: error.message });
    }
};

module.exports = { addReview, getReviewsForCourse };