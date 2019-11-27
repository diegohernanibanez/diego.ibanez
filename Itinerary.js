let mongoose = require('mongoose')

let itinerariesSchema = new mongoose.Schema({
    title: String,
    username: Array,
    rating: Number,
    duration: Number,
    price: Number,
    hashtags: Array,
    cityID: mongoose.Schema.Types.ObjectId
})



module.exports = mongoose.model('Itinerary', itinerariesSchema);