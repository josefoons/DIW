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


    if(req.body.tipoFalta == "leve") {
        //console.log("Minion leve");
         const minion = new Minion({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "Sin Grupo",
            nombreProfesor: req.body.nombreProfesor || "No nombre Profesor",
            horarioProfesor: req.body.horarioProfesor || "Sin horario introducido",
            fechaAlumno: req.body.fechaAlumno || "00/00/0000",
            horaAlumno: req.body.horaAlumno || "00:00",
            lugarAlumno: req.body.lugarAlumno || "Lugar del incidente",
            descripcionIncidente: req.body.descripcionIncidente || "Sin descripcion",
            inicioPrivacion: req.body.inicioPrivacion || "00/00/0000",
            finalPrivacion: req.body.finalPrivacion || "00/00/0000",
            tareasEducadoras: req.body.tareasEducadoras || "Sin tareas asignadas",
            diasTareas: req.body.tareasEducadoras || "00/00/0000",
            horarioTareas: req.body.horarioTareas || "00/00/0000",
            inicioSuspensionDrets: req.body.inicioSuspensionDrets || "00/00/0000",
            finalSuspensionDrets: req.body.finalSuspensionDrets || "00/00/0000",
            inicioSuspensioDretClases: req.body.inicioSuspensioDretClases || "00/00/0000",
            finalSuspensioDretClases: req.body.finalSuspensioDretClases || "00/00/0000",
            telefonoPadres: req.body.telefonoPadres || "Sin telefono de padres",
            emailPadres: req.body.emailPadres || "Sin email de padres",
            fechaHoy: req.body.fechaHoy || "00/00/0000",
            comparenciaDirector: req.body.comparenciaDirector || false,
            retiradaElectronica: req.body.retiradaElectronica || false,
            privacionTiempo: req.body.privacionTiempo || false,
            hacerTareasEducadoras: req.body.hacerTareasEducadoras || false,
            suspensionActividadesExtracolares: req.body.suspensionActividadesExtracolares || false,
            suspensionDretClases: req.body.finalSuspensioDretClases || false,
            tipificacion: req.body.tipificacion || "Sin tipificacion",
            if(req.body.vistoProfesor == "on") {
                vistoProfesor = true 
             }else {
                vistoProfesor = false 
             }            
            //vistoProfesor: req.body.vistoProfesor || false,
            vistoDirector: req.body.vistoDirecto || false
        })
        
        minion.save().then(data =>{
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message|| "Something was wrong creating Minion"
            });
        });
    } else {
        const minion = new Minion({
            nombreAlumno: req.body.nombreAlumno || "No nombre",
            grupoAlumno: req.body.grupoAlumno || "Sin Grupo",
            nombreProfesor: req.body.nombreProfesor || "No nombre Profesor",
            horarioProfesor: req.body.horarioProfesor || "Sin horario introducido",
            fechaAlumno: req.body.fechaAlumno || "00/00/0000",
            horaAlumno: req.body.horaAlumno || "00:00",
            lugarAlumno: req.body.lugarAlumno || "Lugar del incidente",
            descripcionIncidente: req.body.descripcionIncidente || "Sin descripcion",
            telefonoPadres: req.body.telefonoPadres || "Sin telefono de padres",
            emailPadres: req.body.emailPadres || "Sin email de padres",
            fechaHoy: req.body.fechaHoy || "00/00/0000",
            tipificacion: req.body.tipificacion || "Sin tipificacion",
            vistoProfesor: req.body.vistoProfesor || false,
            vistoDirector: req.body.vistoDirector || false
        })

        minion.save().then(data =>{
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message|| "Something was wrong creating Minion"
            });
        });
    }

/*
    minion.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Minion"
        });
    });
    */
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