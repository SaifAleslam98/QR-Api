const asyncHandler = require('express-async-handler');
//const ApiFeatures = require('../utils/api-features');
const ApiError = require('../utils/api-error');


/** Get All Document */
exports.getAllDocumnets = (Model,Populater) => asyncHandler(async (req, res) => {

    const document = await Model.find().sort('-createdAt').populate(Populater);
    if (!document) {
        return next(new ApiError('No document Found', 404))
    }
    res.status(200).json({ result: document.length, data: document })
});


exports.insertOneDocument = (Model, Validator) => asyncHandler(async (req, res) => {
    try {
        await Validator.validateAsync(req.body)
        let myBody = req.body;
        const document = await Model.create(myBody);
        res.status(201).json({ message: 'Document Created succefully', document });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});


exports.getOneDocument = (Model, populater) => asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params
        const document = await Model.findById(id).populate(populater)
        if (!document) {
            return next(new ApiError('No document Found', 404))
        }
        res.status(200).json({ data: document })
    } catch (error) {
        return next(new ApiError('whoops!, ID that you entered are wrong in our DB Schema', 400))
    }
});

exports.delete_One_Document = (Model) => asyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        const document = await Model.findByIdAndDelete(id);
        if (!document) {
            return next(new ApiError('No Documnet Found To Deleted', 404))
        }
        res.status(200).json({ message: 'Document Deleted Succefully' })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

exports.update_One_Document = (Model, Validator) => asyncHandler(async (req, res, next) => {
    try {
        await Validator.validateAsync(req.body);
        const document = await Model.findByIdAndUpdate(req.params.id, req.body,
            { new: true }
        );
        if (!document) {
            return next(new ApiError(`No value Found for id : ${req.params.id}`, 404))
        }
        res.status(200).json({ message: 'Document Updated Succefully', data: document })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});