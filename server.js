const express = require('express');
let mongoose = require('mongoose');
var app = express();
let city = require('./City')
const BodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://diegohernanibanez:di66385191@comision7-ubymn.mongodb.net/cities?retryWrites=true&w=majority",
{useNewUrlParser: true,useUnifiedTopology: true}
    
)
.then( res =>{
    console.log("Connect to mongoDB");
})
.catch( err => {
    console.log("catch " + err);
})

app.get("/", async (req, res) => {
    try {
        var result = city.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => {
    console.log("Listening at :5000...");
});

var findCity = city.model('City', city);

findCity
  .find({
    country: 'Italy'
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })