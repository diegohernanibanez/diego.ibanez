const express = require('express');
let mongoose = require('mongoose');
var app = express();
const cors = require('cors');
let city = require('./City');
let itinerary = require('./Itinerary');
let activity = require('./Activity');
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

app.get("/itinerarios/:id", cors(), async (req, res) => {
  itinerary.find({ cityID: req.params.id }, (err, respuesta) => {
    city.populate(respuesta, { path: "cityID" }, function (err, resp) {
      if (err) return err;
      res.send(resp);
    });
  });
});

app.get("/activities/:_id", cors(), async (req, res) => {
  activity.find({ _id: req.params._id }, (err, respuesta) => {
    itinerary.populate(respuesta, { path: "itineraryID" }, function (err, resp) {
      if (err) return err;
      res.send(resp);
    });
  });
});

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


  // app.get("/cities/:title", (req, res) => {
  //   console.log(req.params.makeId);
  //   let cityRequested = req.params.title;
  //   		city.findOne({ title: cityRequested })
  // 			.then(city => {
  // 				res.send(city)
  // 			})
  // 			.catch(err => console.log(err));
  // })

///////////////INSERT MANY/////////////////


// app.use("/activities/add", cors(), async (req, res) => {
//   activity.find({}, (err, respuesta) => {
//     if (err) return err;
//     res.send(respuesta);
//   });

//   activity.insertMany(
//     [
//       {
//         title: "Antic Teatre",
//         location: "Carrer de Verdaguer i Callís, 12, 08003 Barcelona",
//         duration: 2,
//         price: "€ 10.50",
//         description: "Cute theatre hidden in a bar, didn't understand a thing but it was a lot of fun.",
//         itineraryID: "5de05c98ec87ec27bc100fe6"
//       },

//       {
//         title: "Antic Teatre",
//         location: "Carrer de Verdaguer i Callís, 12, 08003 Barcelona",
//         duration: 2,
//         price: "€ 15,00",
//         description: "The beer garden after the show is really nice and filled with people, hard to find a table but I had a lot of fun.",
//         itineraryID: "5de05c98ec87ec27bc100fe6"
//       },
//     ],
//   )
// }

// );



///////////////INSERT MANY/////////////////



// app.use("/itinerarios/add", cors(), async (req, res) => {
//   itinerary.find({}, (err, respuesta) => {
//     if (err) return err;
//     res.send(respuesta);
//   });

//   itinerary.insertMany(
//     [
//     {
//     title:"Up to Antics",
//     username:"BoozyBabeXOXO",
//     rating:1.8,
//     duration:4,
//     price:"$$$",
//     hashtags:["#theatre","#BeerGarden","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },
//     {
//     title:"Wine & Cava with no Palaver",
//     username:"Wine&DineGuy",
//     rating:3.5,
//     duration:4,
//     price:"$$",
//     hashtags:["#Winetasting","#Cavatour","#Catalunya"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Pablo Picasso in 4 Hours",
//     username:"LiveforArt71",
//     rating:4.9,
//     duration:4,
//     price:"$$",
//     hashtags:["#Picasso","#Gotico","#Els4Gats"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Family Fun at Costa Dorada PortAventura Theme Park",
//     username:"familyfunforever44",
//     rating:3.3,
//     duration:4,
//     price:"$$",
//     hashtags:["#familyfun","#Portaventura","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Gaudi In A Day",
//     username:"GaudiLover",
//     rating:4.67,
//     duration:12,
//     price:"$$",
//     hashtags:["#Gaudi","#Architecture","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Outside the City (Montserrat)",
//     username:"Lady_Like_to_Hike",
//     rating:4.7,
//     duration:12,
//     price:"$$",
//     hashtags:["#Hiking","#Montserat","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Luxury Shopping tour",
//     username:"Lady_Like_to_Hike",
//     rating:1.2,
//     duration:12,
//     price:"$$",
//     hashtags:["#PasseigdeGracia","#Shoptillyoudrop","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Graffiti Galore",
//     username:"el.dodger.astuto.",
//     rating:3.8,
//     duration:11.5,
//     price:"$$",
//     hashtags:["#Graffitti","#Hiddenart","#Barclona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Visca al Barca!",
//     username:"FatherofFootball",
//     rating:4.2,
//     duration:12,
//     price:"$$",
//     hashtags:["#CampNou","#Football","#FCBarcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Placa's Plus Cocktails",
//     username:"BoozyBabeXOXO",
//     rating:1.8,
//     duration:12,
//     price:"$$",
//     hashtags:["#Cocktails","#Placa's","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Tappa till you droppa",
//     username:"hambrealumna",
//     rating:1,
//     duration:12,
//     price:"$$",
//     hashtags:["#Tappas","#Studentlife","#Cheaptoeat"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Barcelona Art History Tour",
//     username:"LiveforArt71",
//     rating:4.9,
//     duration:12,
//     price:"$$",
//     hashtags:["#Winetasting","#Cavatour","#Catalunya"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Rooftop Mania",
//     username:"BasedinBCNBasedinBCN",
//     rating:2.2,
//     duration:12,
//     price:"$$",
//     hashtags:["#RooftopParties","#Sangria","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Costa-less Brava (Day 1)",
//     username:"BasedinBCN",
//     rating:2.5,
//     duration:12,
//     price:"$$",
//     hashtags:["#CostaBrava","#Weekendaway","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Costa-less Brava (Day 2)",
//     username:"BasedinBCN",
//     rating:2.5,
//     duration:12,
//     price:"$$",
//     hashtags:["#CostaBrava","#Weekendaway","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Down by the Sea-tges (Day 1)",
//     username:"miss.tastytraveller",
//     rating:3.98,
//     duration:12,
//     price:"$$",
//     hashtags:["#Sitges","#Weekendaway","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Down by the Sea-tges (Day 2)",
//     username:"miss.tastytraveller",
//     rating:3.98,
//     duration:12,
//     price:"$$",
//     hashtags:["#Sitges","#Weekendaway","#Barcelona"],
//     cityID:"5db8b4861c9d4400000fb6f8"
//     },

//     {
//     title:"Brandenburg Blitz",
//     username:"MüllerMan25",
//     rating:2.7,
//     duration:4,
//     price:"$$",
//     hashtags:["#History","#Berlin","#Holiday"],
//     cityID:"5dbd8db01c9d440000700671"
//     },

//     {
//     title:"Berlin Wall Tour",
//     username:"Talking-travellers",
//     rating:3.5,
//     duration:4,
//     price:"$$",
//     hashtags:["#History","#Berlinwall","#MYtin"],
//     cityID:"5dbd8db01c9d440000700671"
//     },

//     {
//     title:"Nemo Science Museum Trip",
//     username:"familyfunforever44",
//     rating:3.3,
//     duration:4,
//     price:"$$",
//     hashtags:["#Sciencemuseum","#familyfun","#Berlin"],
//     cityID:"5de039731c9d4400009cee83"
//     },

//     {
//     title:"A day in the Dam",
//     username:"Amster-dame53",
//     rating:4.2,
//     duration:4,
//     price:"$$",
//     hashtags:["#IAmsterdam","#Canals","#MYtin"],
//     cityID:"5de039731c9d4400009cee83"
//     },

//     {
//     title:"My Dam Holiday (Day 1)",
//     username:"Amster-dame53",
//     rating:4.2,
//     duration:12,
//     price:"$$",
//     hashtags:["#Amsterdam","#2DayHoliday","#MYtin"],
//     cityID:"5de039731c9d4400009cee83"
//     },

//     {
//     title:"My Dam Holiday (Day 2)",
//     username:"Amster-dame53",
//     rating:4.2,
//     duration:12,
//     price:"$$",
//     hashtags:["#Amsterdam","#2DayHoliday","#MYtin"],
//     cityID:"5de039731c9d4400009cee83"
//     },

//     {
//     title:"Belém Tower in 4 Hours",
//     username:"LisbonLady:2000",
//     rating:0.8,
//     duration:4,
//     price:"$$",
//     hashtags:["#Lisbon","#MYtin","#Landmarks"],
//     cityID:"5de039b21c9d4400009cee84"
//     },

//     {
//     title:"A short time with Lisbon wine",
//     username:"Wine&DineGuy",
//     rating:3.5,
//     duration:4,
//     price:"$$",
//     hashtags:["#Lisbon","#Wine&Dine","#MYtin"],
//     cityID:"5de039b21c9d4400009cee84"
//     },

//     {
//     title:"Eiffel Tower Trip",
//     username:"Alex45",
//     rating:1.23,
//     duration:4,
//     price:"$$",
//     hashtags:["#Eiffel","Tower","#Paris","#Holiday"],
//     cityID:"5dbd95ca1c9d440000de3c98"
//     },

//     {
//     title:"I'd love me some Louvre",
//     username:"OntheGo247",
//     rating:0.5,
//     duration:4,
//     price:"$$",
//     hashtags:["#Louvre","#Paris","#Art"],
//     cityID:"5dbd95ca1c9d440000de3c98"
//     },

//     {
//     title:"Paris without wine is not fine.",
//     username:"Wine&DineGuy",
//     rating:3.5,
//     duration:12,
//     price:"$$",
//     hashtags:["#Paris","#Wine&Dine","#MYtin"],
//     cityID:"5dbd95ca1c9d440000de3c98"
//     },

//     {
//     title:"Lass on the lash",
//     username:"BoozyBabeXOXO",
//     rating:1.8,
//     duration:4,
//     price:"$$",
//     hashtags:["#Booze","#Ireland","#Pubs"],
//     cityID:"5de039c71c9d4400009cee85"
//     },

//     {
//     title:"A day in Dublin",
//     username:"OntheGo247",
//     rating:0.9,
//     duration:4,
//     price:"$$",
//     hashtags:["#Dublin","#Daytrip","#MYtin"],
//     cityID:"5de039c71c9d4400009cee85"
//     },

//     {
//     title:"Hungry for Hungarian Art",
//     username:"LiveforArt71",
//     rating:4.9,
//     duration:4,
//     price:"$$",
//     hashtags:["#Budapest","#Art","#Gallery"],
//     cityID:"5dbd95f51c9d440000de3c9c"
//     },

//     {
//     title:"Along Antall Jozsef",
//     username:"HungarianGirl21",
//     rating:3.67,
//     duration:4,
//     price:"$$",
//     hashtags:["#Architecture","#Budapest","#MYtin"],
//     cityID:"5dbd95f51c9d440000de3c9c"
//     },

//     {
//     title:"Hungarian wine is simply divine",
//     username:"Wine&DineGuy",
//     rating:3.5,
//     duration:12,
//     price:"$$",
//     hashtags:["#Budapest","#Wine&Dine","#MYtin"],
//     cityID:"5dbd95f51c9d440000de3c9c"
//     },

//     {
//     title:"Medievil Mayhem",
//     username:"OntheGo247",
//     rating:0.9,
//     duration:4,
//     price:"$$",
//     hashtags:["#Prague","#Medievilmayhem","#MYtin"],
//     cityID:"5dbd96811c9d440000de3caa"
//     },

//     {
//     title:"4 Hours in Prague",
//     rating:3.71,
//     duration:3.5,
//     price:"$$",
//     hashtags:["#Prague","#daytrip","#citywalk"],
//     cityID:"5dbd96811c9d440000de3caa"
//     },

//     {
//     title:"Hala Madrid!",
//     username:"RedHairedRoamer",
//     rating:4.2,
//     duration:4,
//     price:"$$",
//     hashtags:["#Real Madrid","#Football","#Familyouting"],
//     cityID:"5dbd8dce1c9d440000700673"
//     },

//     {
//     title:"Perpetually in Prague",
//     username:"FatherofFootball",
//     rating:3.98,
//     duration:4,
//     price:"$$",
//     hashtags:["#Foody","#Madrid","#Museums"],
//     cityID:"5dbd8dce1c9d440000700673"
//     },

//     {
//     title:"Holy Rome-ing",
//     username:"miss.tastytraveller",
//     rating:2.13,
//     duration:4,
//     price:"$$",
//     hashtags:["#Holyrome","#Vatican","#Italy"],
//     cityID:"5dbd95961c9d440000de3c96"
//     },

//     {
//     title:"OntheRome247",
//     username:"Nino.Giovanni.88",
//     rating:0.9,
//     duration:3.5,
//     price:"$$",
//     hashtags:["#Rome","#Architecture","#MYtin"],
//     cityID:"5dbd95961c9d440000de3c96"
//     },

//     {
//     title:"When in Rome(Day 1)",
//     username:"LiveforArt71",
//     rating:4.9,
//     duration:12,
//     price:"$$",
//     hashtags:["#WheninRome","#2daytrip","#Italy"],
//     cityID:"5dbd95961c9d440000de3c96"
//     },

//     {
//     title:"When in Rome (Day 2)",
//     username:"LiveforArt71",
//     rating:4.9,
//     duration:12,
//     price:"$$",
//     hashtags:["#WheninRome","#2daytrip","#Italy"],
//     cityID:"5dbd95961c9d440000de3c96"
//     }
//     ],
//   ) 
//  }

// );