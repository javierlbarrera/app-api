const mongoose = require('mongoose')

// Este es un Schema de los ejercicios que podremos seleccionar durante el entrenamiento. Lo pongo antes para pode incluirlo en el Schema de entrenamiento
const ejercicioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        grupoMuscular: {
            type: String,
        },
        series: {
            type: Array,
        },
        /*         imagen : { qué type usar para imagen?
                    type: ,
                }, */
    },
    {
        collection: 'ejercicios',
        collation: {
            locale: 'es',
            strength: 2
        },
        versionKey: false
    }
)
const Ejercicio = mongoose.model('Ejercicio', ejercicioSchema)

const entrenamientoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        usuario: {
            type: String,
        },
        fecha: {
            type: Date,
        },
        duracion: {
            type: Number,
        },
        volumen: {
            type: Number,
        },
        ejercicios: [
            ejercicioSchema // Aquí incluyo el Schema de ejercicios para que cada entrenamiento tenga su lista de ejercicios
        ]
    },
    {
        collection: 'entrenamientos',
        timestamps: true, // añade createdAt y updatedAt. La idea es después usarlos en el front para poder mostrar un "hace X tiempo"
        collation: {
            locale: 'es',
            strength: 2
        },
        versionKey: false
    }
)
const Entrenamiento = mongoose.model('Entrenamiento', entrenamientoSchema)

const usuarioSchema = new mongoose.Schema({
    correo: String,
    contrasena: String // creo que no acepta la ñ
},
    {
        collection: 'usuarios',
        collation: {
            locale: 'es',
            strength: 2
        },
        versionKey: false
    })

const Usuario = mongoose.model('Usuario', usuarioSchema)


module.exports = {
    Entrenamiento,
    Ejercicio,
    Usuario
}