const express= require('express');
const app =express();


const mongoose=require('mongoose');
// const Note = require('./models/Note');

const bodyparser = require('body-parser');
const { router } = require('./src/routes/Note');
const noteRouter = require('./src/routes/Note');
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//true : nested object correct

const mongodbPath='mongodb+srv://praveenkumarytc:praveenDB1@cluster0.znjrzc1.mongodb.net/notesdb';


    app.get("/", function(req, res) {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.status(200).send(response);
    });
    
    app.use("/notes", noteRouter);




  const PORT = process.env.PORT || 5000;
  mongoose.connect(mongodbPath).then(async function (){
    try{
      console.log("Connected to DB")
      app.listen(PORT, () => {
        console.log("Connected to localhost", PORT);
      })  
    }
    catch(err){
      console.log(err)
    }
});