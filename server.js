const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db')

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post('/addInfo',(req, res) => {
    const ADD_QUERY = `INSERT INTO petent (nume, prenume, telefon) VALUES ('${req.body.nume}', '${req.body.prenume}', '${req.body.telefon}');`

    connection.query(ADD_QUERY, (err) =>{
        if(err) console.log(err)
        else console.log("nume, prenume si telefon adaugat in baza de date")
    })
    console.log(req.body)
})

app.get('/server',(req, res) => {
    res.send("serverUp")
    console.log(req.body)
})

app.listen(4000, ()=> {
    console.log("running on port 4000")
})
