const fs = require('fs');
const jwt = require('jsonwebtoken');
const express = require('express');
const commentRoutes = express.Router();

// Require Comment model in our routes module
let Comment = require('../models/comment.model');
// post comment
commentRoutes.route('/').post(isAuthenticated, (req, res) => {
    let comment = new Comment(req.body);
    comment.save()
        .then(() => {
            res.status(200).json({ 'message': 'comment submitted successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});
// get comments
commentRoutes.route('/').get(isAuthenticated, (req, res) => {
    Comment.find({}).sort({ created_at: 'descending' }).find(function (err, comments) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(comments);
        }
    });
});
// get comment by id
commentRoutes.route('/:id').get(isAuthenticated, (req, res) => {
    let id = req.params.id;
    Comment.findById(id, function (err, comment) {
        if (err) {
            res.json(err);
        } else if (!comment) {
            res.status(200).json({ "message": "no results found" });
        } else {
            res.json(comment);
        }
    });
});
//  comment update route
commentRoutes.route('/:id').post(isAuthenticated, (req, res) => {
    Comment.findById(req.params.id, function (err, comment) {
        if (!comment) {
            res.status(404).send("data is not found");
        }
        else {
            comment.first_name = req.body.first_name;
            comment.last_name = req.body.last_name;
            comment.title = req.body.title;
            comment.organization = req.body.organization;
            comment.description = req.body.description;
            comment.save().then(() => {
                res.status(200).json({ "message": "comment successfully updated" });
            })
                .catch(() => {
                    res.status(400).json({ "message": "unable to update comment" });
                });
        }
    });
});
// delete comment by id
commentRoutes.route('/:id').delete(isAuthenticated, (req, res) => {
    Comment.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.status(200).json({ "message": "comment deleted" });
    });
});

function isAuthenticated(req, res, next) {
    if (typeof req.headers.authorization != "undefined") {
        // retrieve the authorization header and parse out the
        let token = req.headers.authorization;
        let privateKey = fs.readFileSync('./api/authentication/private.pem', 'utf8');
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // error handling
            if (err) {  
                // shut them out!
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized1");
    }
}

module.exports = commentRoutes;