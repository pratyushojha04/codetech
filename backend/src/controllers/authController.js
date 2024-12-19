const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary
const crypto = require('crypto'); // For generating tokens
const nodemailer = require('nodemailer'); // For sending emails




// Signup function
// Signup function
const jwt = require("jsonwebtoken");



const signup = async (req, res) => {
    const { username, email, password, role, profilePicture, bio } = req.body;

    try {
        // Validate input
        if (!username || !password || !role || !email) {
            return res.status(400).json({ message: 'Username, email, password, and role are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword, role, profilePicture, bio });
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign(
            { id: newUser._id, username: newUser.username, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        res.status(201).json({ message: 'User created successfully.', token });
    } catch (error) {
        console.error('Error creating user:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error.' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validate input
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        // Find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" } // Token expires in 1 hour
        );

        res.status(200).json({ 
            message: 'Login successful.', 
            token, 
            user: { username: user.username, role: user.role } 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });
    }
};

module.exports = { signup, login };

// // User Registration
// const createUser = async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         // Validate input
//         if (!username || !password) {
//             return res.status(400).json({ message: 'Username and password are required.' });
//         }

//         // Check if user already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists.' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({ username, password: hashedPassword });
//         await newUser.save();

//         res.status(201).json({ message: 'User created successfully.' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error.' });
//     }
// };

// User Logout
const logoutUser = (req, res) => {
    // Logic for logging out a user, e.g., clearing session or token
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed.', error: err.message });
        }
        // Optionally, destroy the session if you're using express-session
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to destroy session.', error: err.message });
            }
            res.status(200).json({ message: 'User logged out successfully.' });
        });
    });
};

// Forgot Password


const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Generate a reset token
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Create a transport for sending emails
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        // Send password reset email
        const mailOptions = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
                  `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
                  `http://localhost:3000/reset-password?token=${token}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Password reset link has been sent to your email.' });
    } catch (error) {
        console.error('Error in forgotPassword:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
// Reset Password
const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        // Find user by reset token
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined; // Clear the token
        user.resetPasswordExpires = undefined; // Clear the expiration
        await user.save();

        res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error.' });
    }
};

module.exports = { signup, login,  logoutUser, forgotPassword, resetPassword };