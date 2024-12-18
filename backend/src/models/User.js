const mongoose = require('mongoose');

/**
 * Created User model with fields specified in models.md.
 */
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String},
    password: { type: String, required: true },
    role: { type: String },
    profilePicture: { type: String, optional: false },
    bio: { type: String, optional: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);