const express = require('express'); 
const movies = require('../routes/movies');
const home = require('../routes/home');
const users = require('../routes/users');
const auth = require('../routes/auth'); 
const error = require('../middleware/error');


module.exports = function(app){
    app.use(express.json())
    app.use(express.urlencoded({extended:true}));
    app.use(express.static('public'));
    //Routes
    app.use('/api/movies',movies);
    app.use('/',home);
    app.use('/api/users' , users);
    app.use('/api/auth',auth);
    //error middleware
    //keep this at end of all middlewares
    app.use(error);
}