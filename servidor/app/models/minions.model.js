const mongoose = require('mongoose');

const MinionLeveSchema = mongoose.Schema({

    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioProfesor: String,
    fechaAlumno: Date,
    horaAlumno: Date,
    lugarAlumno: String,
    descripcionIncidente: String,
    inicioPrivacion: Date,
    finalPrivacion: Date,
    tareasEducadoras: String,
    diasTareas: String,
    horarioTareas: String,
    inicioSuspensionDrets: Date,
    finalSuspensionDrets: Date,
    inicioSuspensioDretClases: Date,
    finalSuspensioDretClases: Date,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: Date,
    comparenciaDirector: Boolean,
    retiradaElectronica: Boolean,
    privacionTiempo: Boolean,
    hacerTareasEducadoras: Boolean,
    suspensionActividadesExtracolares: Boolean,
    suspensionDretClases: Boolean,
    tipificacion: Array,
    vistoProfesor: Boolean,
    vistoDirector: Boolean

}, {
        timestamps: true
    });

const MinionGraveSchema = mongoose.Schema({

    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioProfesor: String,
    fechaAlumno: Date,
    horaAlumno: Date,
    lugarAlumno: String,
    descripcionIncidente: String,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: Date,
    tipificacion: Array,
    vistoProfesor: Boolean,
    vistoDirector: Boolean

}, {
        timestamps: true
    });


module.exports = mongoose.model('Minion', MinionLeveSchema);
module.exports = mongoose.model('Minion', MinionGraveSchema);