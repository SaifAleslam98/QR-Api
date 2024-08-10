const handler = require('./handler');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api-error');

/** Model */
const Attendance = require('../models/attendance-model');

/** Validator */


/** Get All Attendance */
exports.getAllAttendance = handler.getAllDocumnets(Attendance,'studentId subjectId');

