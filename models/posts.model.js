const mongoose = require('mongoose')

//create schema
const PostSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectID,
    //     ref: 'User',
    //     required: true
    // },
    category: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true,
    },
    // image: {
    //     type: String,
    // }
})

const Post = mongoose.model('post', PostSchema)
module.exports = Post