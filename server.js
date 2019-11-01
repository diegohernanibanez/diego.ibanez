const express = require('express');
const app = express();
let mongoose = require('mongoose');
const port = process.env.PORT || 5000;
//app.listen(port, () => console.log("Server running on port $(port)"));
mongoose.connect("mongodb+srv://diegohernanibanez:di66385191@comision7-ubymn.mongodb.net/cities?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true})
.then( res =>{
    console.log("Connect to mongoDB");
})
.catch( err => {
    console.log("catch " + err);
})



