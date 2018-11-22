const MinionL = require('../models/minionsLeve.model.js');
const MinionG = require('../models/minionsGrave.model.js');

// Crear y salvar
exports.create = (req, res) => {

    // Validamos el Minion
    if (!req.body) {
        console.log(req.body);
        return res.status(400).send({
            message: "Minion Vacio..."
        });
    }


    if (req.body.tipoFalta == "leve") {
        const minion = new MinionL({
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
            comparenciaDirector: comprobarBoolean(req.body.comparenciaDirector) || false,
            retiradaElectronica: comprobarBoolean(req.body.retiradaElectronica) || false,
            privacionTiempo: comprobarBoolean(req.body.privacionTiempo) || false,
            hacerTareasEducadoras: comprobarBoolean(req.body.hacerTareasEducadoras) || false,
            suspensionActividadesExtracolares: comprobarBoolean(req.body.suspensionActividadesExtracolares) || false,
            suspensionDretClases: comprobarBoolean(req.body.finalSuspensioDretClases) || false,
            tipificacion: req.body.tipificacion || "Sin tipificacion",
            vistoProfesor: comprobarBoolean(req.body.vistoProfesor) || false,
            vistoDirector: comprobarBoolean(req.body.vistoDirector) || false,
            tipoFalta: req.body.tipoFalta
    })

    minion.save().then(data => {
        //console.log(JSON.stringify(minion));
        //console.log("Angel estuvo aqui");
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something was wrong creating Minion"
        });
    });
} 
    if(req.body.tipoFalta == "grave"){
        //console.log("Inside the GRAVE FALTA "+req.body.tipoFalta);
        const minion = new MinionG({
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
            vistoProfesor: comprobarBoolean(req.body.vistoProfesor) || false,
            vistoDirector: comprobarBoolean(req.body.vistoDirector) || false,
            tipoFalta: req.body.tipoFalta
        })
    
        minion.save().then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something was wrong creating Minion"
            });
        });
    }
};



// Obtener todas las Faltas Leves
exports.findAllLeves = (req, res) => {

    MinionL.find().then(minion => {
        res.send(minion);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};



// Obtener todas las Faltas Graves
exports.findAllGraves = (req,res) => {

    MinionG.find().then(minion => {
        res.send(minion);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Obtener un Minion por Id
exports.findOne = (req, res) => {
    MinionL.findById(req.params.minionId)
        .then(minion => {
            if (!minion) {
                return res.status(404).send({
                    message: "Minion NOT FOUND con ID " + req.params.minionId
                });
            }
            res.send(minion);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Minion no encontrado con ese id :" + req.params.minionId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.minionId
            });
        });

        MinionG.findById(req.params.minionId)
        .then(minion => {
            if (!minion) {
                return res.status(404).send({
                    message: "Minion NOT FOUND con ID " + req.params.minionId
                });
            }
            res.send(minion);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Minion no encontrado con ese id :" + req.params.minionId
                });
            }
            return res.status(500).send({
                message: "Tenemos NOSOTROS problemas con ese id :" + req.params.minionId
            });
        });
};




// Actualizar un minion
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Minion vacio"
        });
    }

    // Find note and update it with the request body
    MinionL.findByIdAndUpdate(req.params.minionId, {
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
        comparenciaDirector: comprobarBoolean(req.body.comparenciaDirector) || false,
        retiradaElectronica: comprobarBoolean(req.body.retiradaElectronica) || false,
        privacionTiempo: comprobarBoolean(req.body.privacionTiempo) || false,
        hacerTareasEducadoras: comprobarBoolean(req.body.hacerTareasEducadoras) || false,
        suspensionActividadesExtracolares: comprobarBoolean(req.body.suspensionActividadesExtracolares) || false,
        suspensionDretClases: comprobarBoolean(req.body.finalSuspensioDretClases) || false,
        tipificacion: req.body.tipificacion || "Sin tipificacion",
        vistoProfesor: comprobarBoolean(req.body.vistoProfesor) || false,
        vistoDirector: comprobarBoolean(req.body.vistoDirector) || false,
        tipoFalta: req.body.tipoFalta
    }, { new: true })
        .then(minion => {
            if (!minion) {
                return res.status(404).send({
                    message: "Minion not found with id " + req.params.minionId
                });
            }
            res.send(minion);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Minion not found with id " + req.params.minionId
                });
            }
            return res.status(500).send({
                message: "Error updating Minion with id " + req.params.minionId
            });
        });
        MinionG.findByIdAndUpdate(req.params.minionId, {
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
            vistoProfesor: comprobarBoolean(req.body.vistoProfesor) || false,
            vistoDirector: comprobarBoolean(req.body.vistoDirector) || false,
            tipoFalta: req.body.tipoFalta
        }, { new: true })
            .then(minion => {
                if (!minion) {
                    return res.status(404).send({
                        message: "Minion not found with id " + req.params.minionId
                    });
                }
                res.send(minion);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
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
exports.delete = (req, res) => {

    
    MinionL.findByIdAndRemove(req.params.minionId)
        .then(minion => {
            if (!minion) {
                return res.status(404).send({
                    message: "Minion no encontrado " + req.params.minionId
                });
            }
            res.send({ message: "Enemigo ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Minion not found with id " + req.params.minionId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Minion with id " + req.params.minionId
            });
        });

        MinionG.findByIdAndRemove(req.params.minionId)
        //.then(Promise.resolve());
        .then(minion => {
            if (!minion) {
                return res.status(404).send({
                    message: "Minion no encontrado " + req.params.minionId
                });
            }
            res.send({ message: "Enemigo ha vencido !" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Minion not found with id " + req.params.minionId
                });
            }
            return res.status(500).send({
                message: "No podemos matar a ese Minion with id " + req.params.minionId
            });
        });
        
};

function comprobarBoolean(elemento) {
    

    if (elemento == "on") {
        return true;
    } else {
        return false;
    }
}
