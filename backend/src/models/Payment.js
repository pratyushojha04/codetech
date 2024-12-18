const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    transactionId: { type: String, required: true },
    status: { type: String, enum: ['successful', 'failed', 'pending'], required: true }
});

module.exports = mongoose.model('Payment', paymentSchema);