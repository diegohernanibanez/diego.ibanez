const express = require('express');
let mongoose = require('mongoose');
var app = express();
const cors = require('cors');
let city = require('./City');
let itinerary = require('./Itinerary');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
    if (err) return err;
    res.send(respuesta);
  });

});

app.get("/cities/:makeId", (req, res) => {
  console.log(req.params.makeId);
  res.send("Hola mundo")
})

app.post('/cities', (req, res) => {
  const newCity = new city({
    name: req.body.name,
    country: req.body.country
  });

  city.find(
    {
      name: req.body.name,
      country: req.body.country
    },
    (err, respuesta) => {
      if (respuesta.length !== 0) {

        res.send("Ciudad Repetida")

      } else {

          newCity.save()

            .then(city => {
              res.send(city)
            })

            .catch(err => {
              res.status(500).send("Server error")
            })
        }
      }
    );
});



app.listen(port, () => console.log(`Listening on port ${port}`));

