let mongoose = require('mongoose')

let itinerariesSchema = new mongoose.Schema({
    title: String,
    username: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: Array,
    cityID: mongoose.Schema.Types.ObjectId
})



module.exports = mongoose.model('Itinerary', itinerariesSchema);