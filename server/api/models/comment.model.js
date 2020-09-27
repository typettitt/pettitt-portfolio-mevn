const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Comment
let Comment = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    title: {
        type: String
    },
    organization: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
},
    {
        collection: 'comments'
    });

//create date and updated date
Comment.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

module.exports = mongoose.model('Comment', Comment);