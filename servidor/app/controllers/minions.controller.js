const Minion = require('../models/minions.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Minion
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Minion Vacio..." 
        });
    }

    const Minion = new Minion({
        nombre: req.body.nombre || "Sin Nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.vida|| 42,
        puntosCordura: req.body.puntosCordura  || 21
    })

    Minion.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Minion"
        });
    });
};



// Obtener todos los Minions
exports.findAll = (req,res) => {

         Minion.find().then( Minions=>{
            res.send(minions);
        }).catch(err=>{
            res.status(500).send({
                message: err.message || " Algo fue mal mientras los capturabamos a todos"
            });
        });

};


// Obtener un Minion por Id
exports.findOne = (req,res) => {
    Minion.findById(req.params.minionId)
    .then(minion=>{
        if (!minion){
            return res.status(404).send({
                message: "Minion NOT FOUND con ID " +req.params.minionId
            });
            }
            res.send(minion);
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message: "Minion no encontrado con ese id :" +req.params.minionId
                });
            }
             return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" +req.params.minionId
             });
        });
    };




// Actualizar un minion
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Minion vacio"
        });
    }

    // Find note and update it with the request body
    Minion.findByIdAndUpdate(req.params.minionId, {
        nombre: req.body.nombre|| "Sin nombre",
        profesion: req.body.profesion || "Sin profesion",
        puntosVida: req.body.puntosVida || 0,
        puntosCordura: req.body.puntosCordura || 0
    }, {new: true})
    .then(minion => {
        if(!minion) {
            return res.status(404).send({
                message: "Minion not found with id " + req.params.minionId
            });
        }
        res.send(minion);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Minion not found with id " + req.params.minionId
            });                
        }
        return res.status(500).send({
            message: "Error updating Minion with id " + req.params.minionId
        });
    });
};

// Borrar un minion 
exports.delete = (req,res)=>{
    Minion.findByIdAndRemove(req.params.minionId)
    .then(minion => {
        if(!minion) {
            return res.status(404).send({
                message: "Minion no encontrado " + req.params.minionId
            });
        }
        res.send({message: "Enemigo ha vencido !"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Minion not found with id " + req.params.minionId
            });                
        }
        return res.status(500).send({
            message: "No podemos matar a ese Minion with id " + req.params.minionId
        });
    });
};