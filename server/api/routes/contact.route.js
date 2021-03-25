const fs = require('fs');
const mailer = require('../../services/mailer.js');
const express = require('express');
const auth = require('../../services/auth.js');
const contactRoutes = express.Router();

// Require Contact model in our routes module
let Contact = require('../models/contact.model');
// post contact
contactRoutes.route('/').post(auth.check, (req, res) => {
    let contact = new Contact(req.body);
    contact.save()
        .then(() => {
            mailer({
                from: contact.email,
                to: process.env.EMAIL_TO,
                subject: 'Portfolio Message From: ' + contact.name,
                text: 'From: '+contact.name + '\r\n' + contact.email + '\r\n' + '\r\n' + contact.message
            });
            res.status(200).json({ 'message': 'contact submitted successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});
// get contacts
contactRoutes.route('/').get(auth.check, (req, res) => {
    Contact.find({}).sort({ created_at: 'descending' }).find(function (err, contacts) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(contacts);
        }
    });
});
// get contact by id
contactRoutes.route('/:id').get(auth.check, (req, res) => {
    let id = req.params.id;
    Contact.findById(id, function (err, contact) {
        if (err) {
            res.json(err);
        } else if (!contact) {
            res.status(200).json({ "message": "no results found" });
        } else {
            res.json(contact);
        }
    });
});
//  contact update route
contactRoutes.route('/:id').post(auth.check, (req, res) => {
    Contact.findById(req.params.id, function (err, contact) {
        if (!contact) {
            res.status(404).send("data is not found");
        }
        else {
            contact.name = req.body.name;
            contact.email = req.body.email;
            contact.message = req.body.message;
            contact.save().then(() => {
                res.status(200).json({ "message": "contact successfully updated" });
            })
                .catch(() => {
                    res.status(400).json({ "message": "unable to update contact" });
                });
        }
    });
});
// delete contact by id
contactRoutes.route('/:id').delete(auth.check, (req, res) => {
    Contact.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.status(200).json({ "message": "contact deleted" });
    });
});

module.exports = contactRoutes;