// middlewares/roleRequired.js
const User = require('../models/User');

const roleRequired = (role) => {
    return async (req, res, next) => {
        try {
            // Assuming you have a way to get the logged-in user from the request
            const userId = req.user.id; // This should be set during authentication
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            if (user.role !== role) {
                return res.status(403).json({ message: 'Access denied. Teachers only.' });
            }

            next(); // User has the required role, proceed to the next middleware or route handler
        } catch (error) {
            console.error('Error checking user role:', error);
            res.status(500).json({ message: 'Server error.' });
        }
    };
};

module.exports = roleRequired;