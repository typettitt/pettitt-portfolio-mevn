const fs = require('fs');
const jwt = require('jsonwebtoken');
const express = require('express');
const jwtRoute = express.Router();

// get jwt
jwtRoute.route('/').get((req, res) => {
    let privateKey = process.env.PRIVATE_KEY;
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(token);
});

module.exports = jwtRoute;
