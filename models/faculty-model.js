const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model('Faculty', facultySchema);