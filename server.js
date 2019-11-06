const express = require('express');
let mongoose = require('mongoose');
var app = express();
const cors = require('cors');
let city = require('./City')
const BodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://diegohernanibanez:di66385191@comision7-ubymn.mongodb.net/cities?retryWrites=true&w=majority",

  { useNewUrlParser: true, useUnifiedTopology: true }


)
  .then(res => {
    console.log("Connect to mongoDB");
  })
  .catch(err => {
    console.log("catch " + err);
  })

app.get("/cities", cors(), async (req, res) => {

  city.find({}, (err, respuesta) => {

    if(err) return err;

    console.log(respuesta);
    res.send(respuesta);
  });

});



app.listen(port, () => {
  console.log("Listening at :5000...");
});




/* City.insertMany(
  [
    {
      "id": 1,
      "name": ["Hamburg", "Berlin", "Munich"],
      "country": "Germany"
    },
    {
      "id": 2,
      "name": ["Rome", "Milan", "Napoli"],
      "country": "Italy"
    },
    {
      "id": 3,
      "name": ["Paris", "Berlin", "Munich"],
      "country": "France"
    },
    {
      "id": 4,
      "name": ["London", "Milan", "Napoli"],
      "country": "UK"
    },
    {
      "id": 5,
      "name": ["Madrid", "Milan", "Napoli"],
      "country": "Spain"
    },
    {
      "id": 6,
      "name": ["Copenhagen"],
      "country": "Denmakr"
    },
    {
      "id": 7,
      "name": ["Oslo"],
      "country": "Norway"
    },
    {
      "id": 8,
      "name": ["Bucharest"],
      "country": "Rumanua"
    },
    {
      "id": 9,
      "name": ["Budapest"],
      "country": "Hungary"
    },
    {
      "id": 10,
      "name": ["Warsaw"],
      "country": "Poland"
    },
    {
      "id": 5,
      "name": ["Belgrade"],
      "country": "Serbia"
    },
    {
      "id": 11,
      "name": ["Vienna"],
      "country": "Austria"
    },
    {
      "id": 12,
      "name": ["Czech Republic"],
      "country": "Prague"
    },
    {
      "id": 13,
      "name": ["Sofia"],
      "country": "Bulgaria"
    },
    {
      "id": 14,
      "name": ["Stockholm"],
      "country": "Sweden"
    },
    {
      "id": 15,
      "name": ["Helsinki"],
      "country": "Finland"
    }
  ], (err, doc) => {
    if (err)
      throw err;
    console.log(doc);
  }
)

}) */