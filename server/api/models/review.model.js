const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Review
let Review = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
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
    pin: {
        type: Number,
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
        collection: 'reviews'
    });

//create date and updated date
Review.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

module.exports = mongoose.model('Review', Review);