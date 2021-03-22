const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Contact
let Contact = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
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
        collection: 'messages'
    });

//create date and updated date
Contact.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

module.exports = mongoose.model('Contact', Contact);