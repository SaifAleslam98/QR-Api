const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Student'
    },
    subjectId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Subject'
    },
    attendanceAt:String,
    time:String
}, { timestamps: true });
module.exports = mongoose.model('Attendance', attendanceSchema);