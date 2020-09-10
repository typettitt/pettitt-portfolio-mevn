require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//add routes
const reviewRoute = require('./api/routes/review.route');

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@pettitt-andromeda.oiri9.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Database connected: '+ process.env.DB_NAME);
    },
    err => { console.log('Can not connect to the database: ' + err) }
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add routes
app.use('/api/review', reviewRoute);

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