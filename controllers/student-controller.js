const handler = require('./handler');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api-error');

/** Model */
const Student = require('../models/student-model');
const Subject = require('../models/subject-model');
const Attendance = require('../models/attendance-model');

/** Validator */
const { insertNewStudent } = require('../utils/validator/student-validator');

//Function To Set Key To The Body
exports.setKey = (req, res, next) => {
    let key = (Math.random().toString(36).substring(2, 16).toUpperCase());
    req.body.code = key;
    next()
}

/** Get All Faculties */
exports.getAllStudents = handler.getAllDocumnets(Student);

/** Save New Faculty */
exports.insertStudent = handler.insertOneDocument(Student, insertNewStudent);

/** Check For Student */
exports.checkStudent = asyncHandler(async (req, res) => {
    try {
        const { code, key } = req.query;
        const student = await Student.findOne({ code });
        const subject = await Subject.findOne({ key });
        if (!student || !subject) {
            res.status(400).json({ message: 'Something went wrong, please back to your manager' });
        }
        let attendance = {};
        const dateCreate = new Date().toDateString().slice(4)
        const timeCreate = new Date().toLocaleTimeString()
        attendance.studentId = student._id;
        attendance.subjectId = subject._id;
        attendance.attendanceAt = dateCreate;
        attendance.time = timeCreate;
        const isStudentMadeAttendance = await Attendance.findOne({ studentId: student._id, subjectId: subject._id });
        if (isStudentMadeAttendance) {
            res.status(200).json({ message: 'You can not attendance twice.', success: false });
        } else {
            await Attendance.create(attendance);
            res.status(201).json({ message: 'Document Created succefully' })
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

exports.deleteAl = asyncHandler(async (req, res) => {
    try {
        const del = await Attendance.deleteMany()
        res.send(del)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})