const Lesson = require('../models/Lesson');

// Create a new lesson
exports.createLesson = async (req, res) => {
    try {
        const lesson = new Lesson(req.body);
        await lesson.save();
        res.status(201).json(lesson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all lessons
exports.getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.status(200).json(lessons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a lesson by ID
exports.getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a lesson
exports.updateLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
        res.status(200).json(lesson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a lesson
exports.deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};