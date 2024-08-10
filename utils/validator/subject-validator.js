const Joi = require('joi');

exports.insertNewSubject = Joi.object({
    name: Joi.string().empty().min(2).max(30).required().messages({
        'any.required':'Subject name is required ',
        'string.empty':'Please fill subject name ',
        'string.min': "Minimum length must be at least 2 characters",
        'string.max': "Maximum length must be 30 characters",
        'string.base':'Please insert a string value'
    }),
    faculty: Joi.string().empty().min(3).max(30).required().messages({
        'any.required':'Faculty name is required ',
        'string.empty':'Please select faculty name ',
        'string.min': "Minimum length must be at least 5 characters",
        'string.max': "Maximum length must be 30 characters",
        'string.base':'Please insert a string value'
    }),
    level: Joi.number().empty().min(1).max(6).required().messages({
        'any.required':'Subject name is required ',
        'string.empty':'Please fill subject name ',
        'string.min': "Minimum length must be at least 1 characters",
        'string.max': "Maximum length must be 6 characters",
        'string.base':'Please insert a number value'
    }),
    semester: Joi.number().empty().min(1).max(12).required().messages({
        'any.required':'Subject name is required ',
        'string.empty':'Please fill subject name ',
        'string.min': "Minimum length must be at least 1 characters",
        'string.max': "Maximum length must be 12 characters",
        'string.base':'Please insert a number value'
    }),
    key:Joi.allow(),
});