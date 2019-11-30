let mongoose = require('mongoose')

let activitiesSchema = new mongoose.Schema({
    title: String,
    location: String,
    duration: Number,
    price: String,
    description: String,
    itineraryID: mongoose.Schema.Types.ObjectId
})



module.exports = mongoose.model('Activity', activitiesSchema);
