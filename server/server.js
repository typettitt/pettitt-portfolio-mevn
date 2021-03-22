require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//add routes
const commentRoute = require('./api/routes/comment.route');
const contactRoute = require('./api/routes/contact.route');
const jwtRoute = require('./api/routes/jwt.route');
const pulseRoute = require('./api/routes/pulse.route');

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_MONGO_ADDRESS + process.env.DB_NAME + "?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Database connected: '+ process.env.DB_NAME);
    },
    err => { console.log('Cannot connect to the database: ' + err) }
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add routes
app.use('/api/contact', contactRoute);
app.use('/api/comment', commentRoute);
app.use('/api/jwt', jwtRoute);
app.use('/api/pulse', pulseRoute);

//handle production
if(process.env.NODE_ENV == 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public'));
    
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(process.env.PORT, function () {
    console.log('Server is running on Port:', process.env.PORT);
});