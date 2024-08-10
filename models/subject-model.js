const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true,
        enum:[1,2,3,4,5,6]
    },
    semester: {
        type: Number,
        required: true,
        enum:[1,2,3,4,5,6,7,8,9,10,11,12]
    },
    key:{
        type:String,
        required:true
    }

}, { timestamps: true });
module.exports = mongoose.model('Subject', subjectSchema);