
const express= require('express');
const app =express();


const mongoose=require('mongoose');
const Note = require('./models/Note');

const bodyparser = require('body-parser');
const { router } = require('./routes/Note');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//true : nested object correct

const mongodbPath='mongodb+srv://praveenkumarytc:praveenDB1@cluster0.znjrzc1.mongodb.net/notesdb';
mongoose.connect(mongodbPath).then(function (){

    app.post("/", function(req, res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);
    });
    
    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);
  });



  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log("Connected to localhost", PORT);
  });