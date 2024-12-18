const Notification = require('../models/Notification'); // Adjust the path as necessary

// Create Notification
const createNotification = async (req, res) => {
    const { title, message } = req.body;

    try {
        const newNotification = new Notification({
            title,
            message,
            createdAt: new Date(),
        });

        await newNotification.save();
        res.status(201).json({ message: 'Notification created successfully.', notification: newNotification });
    } catch (error) {
        res.status(500).json({ message: 'Error creating notification.', error: error.message });
    }
};

// Get Notifications
const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json({ message: 'Retrieved notifications.', notifications });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notifications.', error: error.message });
    }
};

// Get Notification by ID
const getNotificationById = async (req, res) => {
    const { id } = req.params;

    try {
        const notification = await Notification.findById(id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found.' });
        }
        res.status(200).json({ message: `Details for notification ${id}.`, notification });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notification.', error: error.message });
    }
};

// Update Notification
const updateNotification = async (req, res) => {
    const { id } = req.params;
    const { title, message } = req.body;

    try {
        const updatedNotification = await Notification.findByIdAndUpdate(id, { title, message }, { new: true });
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found.' });
        }
        res.status(200).json({ message: `Notification ${id} updated successfully.`, notification: updatedNotification });
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification.', error: error.message });
    }
};

// Delete Notification
const deleteNotification = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNotification = await Notification.findByIdAndDelete(id);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notification not found.' });
        }
        res.status(200).json({ message: `Notification ${id} deleted successfully.` });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting notification.', error: error.message });
    }
};



// Mark Notification as Read
const markNotificationAsRead = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedNotification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found.' });
        }
        res.status(200).json({ message: `Notification ${id} marked as read.`, notification: updatedNotification });
    } catch (error) {
        res.status(500).json({ message: 'Error marking notification as read.', error: error.message });
    }
};

module.exports = { markNotificationAsRead,createNotification, getNotifications, getNotificationById, updateNotification, deleteNotification };