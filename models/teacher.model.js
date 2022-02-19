const mongoose = require('mongoose')

//create teacher schema
const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    pattern: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
})

const Teacher = mongoose.model('teacher', TeacherSchema)
module.exports = Teacher