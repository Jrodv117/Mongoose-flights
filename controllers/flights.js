const Flight = require('../models/flight')
const flight = require('../models/flight')

module.exports ={
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights');
    });
}

function index(req,res){
    flight.find({}, function(err, flights){
        res.render('flights/index', {flights})
    })
}