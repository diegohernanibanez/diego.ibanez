let mongoose = require('mongoose')

let citiesSchema = new mongoose.Schema({
    name: String,
    country: String
  
})



module.exports = mongoose.model('City', citiesSchema);