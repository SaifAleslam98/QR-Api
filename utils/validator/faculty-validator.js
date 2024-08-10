const Joi = require('joi');

exports.insertNewFaculty = Joi.object({
    name: Joi.string().empty().min(5).max(30).required().messages({
        'any.required':'Faculty name is required ',
        'string.empty':'Please fill faculty name ',
        'string.min': "Minimum length must be at least 5 characters",
        'string.max': "Maximum length must be 30 characters",
        'string.base':'Please insert a string value'
    }),
});