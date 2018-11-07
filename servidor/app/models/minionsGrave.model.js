const mongoose = require('mongoose');

const MinionGraveSchema = mongoose.Schema({

    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioProfesor: String,
    fechaAlumno: String,
    horaAlumno: String,
    lugarAlumno: String,
    descripcionIncidente: String,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,
    tipificacion: Array,
    vistoProfesor: Boolean,
    vistoDirector: Boolean

}, {
        timestamps: true
    });

module.exports = mongoose.model('MinionGrave', MinionGraveSchema);
