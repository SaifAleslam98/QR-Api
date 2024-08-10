const handler = require('./handler');
const asyncHandler = require('express-async-handler');
const ApiError = require('../utils/api-error');

/** Model */
const Subject = require('../models/subject-model');

/** Validator */
const {insertNewSubject} = require('../utils/validator/subject-validator');

//Function To Set Key To The Body
exports.setKey = (req, res, next) => {
    let key = (Math.random().toString(36).substring(2, 8).toUpperCase());
    req.body.key = key;
    next()
}

/** Get All Faculties */
exports.getAllSubjects = handler.getAllDocumnets(Subject);

/** Save New Faculty */
exports.insertSubject = handler.insertOneDocument(Subject,insertNewSubject);