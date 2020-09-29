const fs = require('fs');
const jwt = require('jsonwebtoken');
const express = require('express');
const jwtRoute = express.Router();

// get jwt
jwtRoute.route('/').get((req, res) => {
    let privateKey = fs.readFileSync('./api/authentication/private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    res.send(token);
});

module.exports = jwtRoute;
