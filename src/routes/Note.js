const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

router.post("/list", async function(req, res) {
    try{

        var query = {};
        if (req.body.userid) {
            query.userid = req.body.userid;
        }
        var notes = await Note.find(query);
        const response = { statuscode: res.statusCode, notes:notes,message: "API Works!" };
        res.status(201).send(response);
    }
    catch(err){
        res.status(400).send(err)
    }
});


router.post("/add", async function(req, res) {       
    
    await Note.deleteOne({ id: req.body.id });

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
    await newNote.save();

    const response = { message: "New Note Created! " + `id: ${req.body.id}` };
    res.json(response);

});

router.post("/delete", async function(req, res) {
    await Note.deleteOne({ id: req.body.id });
    const response = { message: "Note Deleted! " + `id: ${req.body.id}` };
    res.json(response);
});

module.exports = router;