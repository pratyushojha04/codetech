const Announcement = require('../models/Announcement'); // Adjust the path as necessary

// Create Announcement
const createAnnouncement = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newAnnouncement = new Announcement({
            title,
            content,
            createdAt: new Date(),
        });

        await newAnnouncement.save();
        res.status(201).json({ message: 'Announcement created successfully.', announcement: newAnnouncement });
    } catch (error) {
        res.status(500).json({ message: 'Error creating announcement.', error: error.message });
    }
};

// Get Announcements
const getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json({ message: 'Retrieved announcements.', announcements });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving announcements.', error: error.message });
    }
};



// Get Announcement by ID
const getAnnouncementById = async (req, res) => {
    const { id } = req.params;

    try {
        const announcement = await Announcement.findById(id);
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found.' });
        }
        res.status(200).json({ message: `Details for announcement ${id}.`, announcement });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving announcement.', error: error.message });
    }
};

// Get Announcements for a Course
const getAnnouncementsForCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const announcements = await Announcement.find({ courseId });
        res.status(200).json({ message: `Retrieved announcements for course ${courseId}.`, announcements });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving announcements.', error: error.message });
    }
};

// Update Announcement
const updateAnnouncement = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found.' });
        }
        res.status(200).json({ message: `Announcement ${id} updated successfully.`, announcement: updatedAnnouncement });
    } catch (error) {
        res.status(500).json({ message: 'Error updating announcement.', error: error.message });
    }
};

// Delete Announcement
const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
        if (!deletedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found.' });
        }
        res.status(200).json({ message: `Announcement ${id} deleted successfully.` });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting announcement.', error: error.message });
    }
};

module.exports = { createAnnouncement, getAnnouncements, getAnnouncementById, getAnnouncementsForCourse,updateAnnouncement, deleteAnnouncement };