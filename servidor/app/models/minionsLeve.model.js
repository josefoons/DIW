const mongoose = require('mongoose');

const MinionLeveSchema = mongoose.Schema({

    nombreAlumno: String,
    grupoAlumno: String,
    nombreProfesor: String,
    horarioProfesor: String,
    fechaAlumno: String,
    horaAlumno: String,
    lugarAlumno: String,
    descripcionIncidente: String,
    inicioPrivacion: String,
    finalPrivacion: String,
    tareasEducadoras: String,
    diasTareas: String,
    horarioTareas: String,
    inicioSuspensionDrets: String,
    finalSuspensionDrets: String,
    inicioSuspensioDretClases: String,
    finalSuspensioDretClases: String,
    telefonoPadres: String,
    emailPadres: String,
    fechaHoy: String,
    comparenciaDirector: Boolean,
    retiradaElectronica: Boolean,
    privacionTiempo: Boolean,
    hacerTareasEducadoras: Boolean,
    suspensionActividadesExtracolares: Boolean,
    suspensionDretClases: Boolean,
    tipificacion: Array,
    tipoFalta: String,

    /* Aqui para comprobar */

    vistoTutor: Boolean,
    vistoOrientadora: Boolean,
    vistoJefeEstudios: Boolean,
    vistoConvivencia: Boolean,
    habladoFamilia: Boolean,

    /* Evaluacion */
    evaluacion: Number

}, {
        timestamps: true
    });

module.exports = mongoose.model('MinionLeve', MinionLeveSchema);
