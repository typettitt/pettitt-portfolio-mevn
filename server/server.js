const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

//add routes
const postRoute = require('./api/post.route');

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin-pettitt:yT36kOyylMzCcykF@pettitt-andromeda.oiri9.mongodb.net/pettitt-portfolio-db?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Database is connected')
    },
    err => { console.log('Can not connect to the database: ' + err) }
);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//add routes
app.use('/api/posts', postRoute);

//handle production
if(process.env.NODE_ENV == 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public'));
    
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
app.listen(process.env.PORT || PORT, function () {
    console.log('Server is running on Port:', PORT);
});