const jwt = require('jsonwebtoken');

var checkAuth = function isAuthenticated(req, res, next) {
    //this does nothing productive I know
    req.headers.authorization = `Bearer ` + getToken();
    if (typeof req.headers.authorization != "undefined") {
        let token = req.headers.authorization.split(' ')[1];
        let privateKey = process.env.PRIVATE_KEY;
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            if (err) {  
                res.status(500).json({ error: "Not Authorized" });
                throw new Error("Not Authorized");
            }
            return next();
        });
    } else {
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized1");
    }
}

var getToken = function getJWT(){
    let privateKey = process.env.PRIVATE_KEY;
    let token = jwt.sign({ "body": "stuff" }, privateKey, { algorithm: 'HS256'});
    return token;
}

module.exports = {
    check: checkAuth,
    token: getToken
}