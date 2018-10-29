const mongoose = require('mongoose');

const MinionSchema = mongoose.Schema({

    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioProfesor: String,
    fechaAlumno: Date,
    horaAlumno: Date,
    lugarAlumno: String,
    descripcionIncidente: String,
    tipoFalta: String,
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
    tipificacion: Array

}, {
        timestamps: true
    });


module.exports = mongoose.model('Minion', MinionSchema);