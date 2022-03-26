const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const mongoose = require('mongoose');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    const flight = {id: req.params.id}
    res.render('tickets/new', {title:'tickets', flight});
}

function create(req, res) {
    let ticket = new Ticket(req.body)
    ticket.flight = mongoose.Types.ObjectId(req.params.id)
    ticket.save(function(err, saved) {
        res.redirect('/flights/' + req.params.id);
    })
}
