const express = require('express');
const reviewRoutes = express.Router();
// Require Review model in our routes module
let Review = require('../models/review.model');
// post review
reviewRoutes.route('/').post(function (req, res) {
    let review = new Review(req.body);
    review.save()
        .then(() => {
            res.status(200).json({ 'message': 'review submitted successfully' });
        })
        .catch(() => {
            res.status(400).send("unable to save to database");
        });
});
// get reviews
reviewRoutes.route('/').get(function (req, res) {
    Review.find({}).sort({created_at: 'descending'}).find(function (err, reviews) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(reviews);
        }
    });
});
// get review by id
reviewRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Review.findById(id, function (err, review) {
        if (err) {
            res.json(err);
        }else if(!review){
            res.status(200).json({"message": "no results found"});
        }else{
            res.json(review);
        }
    });
});
//  review update route
reviewRoutes.route('/:id').post(function (req, res) {
    Review.findById(req.params.id, function (err, review) {
        if (!review){
            res.status(404).send("data is not found");
        }
        else {
            review.first_name = req.body.first_name;
            review.last_name = req.body.last_name;
            review.email = req.body.email;
            review.title = req.body.title;
            review.organization = req.body.organization;
            review.description = req.body.description;
            review.save().then(() => {
                res.status(200).json({"message": "review successfully updated"});
            })
                .catch(() => {
                    res.status(400).json({"message": "unable to update review"});
                });
        }
    });
});
// delete review by id
reviewRoutes.route('/:id').delete(function (req, res) {
    Review.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) res.json(err);
        else res.status(200).json({"message": "review deleted"});
    });
});
module.exports = reviewRoutes;