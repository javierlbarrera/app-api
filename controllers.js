const {Entrenamiento, Ejercicio} = require('./schemas')

// se cargará al abrir la aplicación para mostrar todos los entrenamientos
const getEntrenamientos = async (req, res, next) => {
    
    try {
        const buscar = await Entrenamiento.find()
        res.status(200).json(buscar)
    } catch (error) {
        next(error)
    }
}

// POST para crear un nuevo entrenamiento al hacer click en el botón
const postEntrenamiento = async (req, res, next) => {
    try {
        const { nombre, usuario, fecha, duracion, volumen, ejercicios } = req.body
        
        const nuevoEntrenamiento = new Entrenamiento({
            nombre,
            usuario,
            fecha,
            duracion,
            volumen,
            ejercicios
        })
        
        await nuevoEntrenamiento.save()
        res.status(201).json(nuevoEntrenamiento) //comprobar si devuelve el nuevo entrenamiento creado?
    } catch (error) {
        next(error)
    }
}

//GET para cargar los ejercicios en el selector
const getEjercicios = async (req, res, next) => {
    try {
        const buscar = await Ejercicio.find()
        res.status(200).json(buscar)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEntrenamientos,
    postEntrenamiento,
    getEjercicios,
}