const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const superAdmin = require('../middleware/superAdmin');

const express =  require('express');
const router = express.Router();
const Joi = require('joi');

const movies = [
    {id:1,name:"Avengers",genre:"Action"},
    {id:2,name:"Badla",genre:"Thriller"}
]  

//validate function to validate the data
const validate = (req) => {
    const schema = {
        name: Joi.string().min(2).required(),
        genre: Joi.string().min(3).required()
    }
    return Joi.validate(req,schema);
}


//Get all the movies
router.get('/',(req,res) => {
    res.send(movies);   
});

//Accessable to all users
//get details of movie with particular id
router.get('/:id',(req,res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with the given id was not found')
    res.send(movie);
})

//Only Admin Can post
//Post a new movie
router.post('/',[auth,admin],(req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(401).send(error.details[0].message);

    const movie = {
        id:movies.length + 1,
        name:req.body.name,
        genre:req.body.genre
    }
    movies.push(movie);
    res.send(movie);
})

//Update movie details
router.put('/:id',(req,res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    movie.name = req.body.name;
    movie.genre = req.body.genre;

    res.send(movie);
})

//Only super Admin can delete
//delete a movie
router.delete('/:id',[auth,superAdmin],(req,res) => {
    const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie not found');
    
    const index  = movies.indexOf(movie);
    movies.splice(index,1);

    res.send(movie);
})


module.exports = router;