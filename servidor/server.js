const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

//Parsearemos los jsones
app.use(bodyParser.json());


// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });

// Require minions routes
require('./app/routes/minions.routes.js')(app); 

// Vamos a definir un "punto de inicio"
app.get('/',(req,res)=>{
    res.json({"message":"Parte Backend de nuestro programa"});
});

// Crear el puerto y escucharlo

app.listen(3000,() => {
    console.log(" * Server girando correctamente.");
});

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));