const handler = require('./handler');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api-error');

/** Model */
const Faculty = require('../models/faculty-model');

/** Validator */
const {insertNewFaculty} = require('../utils/validator/faculty-validator');

/** Get All Faculties */
exports.getAllFaculties = handler.getAllDocumnets(Faculty);

/** Save New Faculty */
exports.insertFaculty = handler.insertOneDocument(Faculty,insertNewFaculty);