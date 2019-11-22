let mongoose = require('mongoose')

let itinerariesSchema = new mongoose.Schema({
    title: String,
    city: String,
    username: Array,
    rating: Number,
    duration: Number,
    priece: Number,
    hashtags: Array
})



module.exports = mongoose.model('Itinerary', itinerariesSchema);