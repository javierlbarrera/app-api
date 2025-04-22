const { Entrenamiento, Ejercicio } = require('./schemas')

// se cargará al abrir la aplicación para mostrar todos los entrenamientos
const getEntrenamientos = async (req, res, next) => {

    try {
        const buscar = await Entrenamiento.find().sort({ updatedAt: -1 }) //para devolver los últimos entrenamientos primero
        res.status(200).json(buscar)
    } catch (error) {
        next(error)
    }
}

// POST para crear un nuevo entrenamiento al hacer click en el botón
const postEntrenamiento = async (req, res, next) => {
    try {

        const {
            nombre,
            usuario,
            fecha,
            duracion,
            volumen,
            ejercicios
        } = req.body

        const nuevoEntrenamiento = new Entrenamiento({
            nombre,
            usuario,
            fecha,
            duracion,
            volumen,
            ejercicios
        })

        await nuevoEntrenamiento.save()
        res.status(201).json(nuevoEntrenamiento)
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

// DELETE para borrar el entrenamiento desde la página de inicio
const deleteEntrenamiento = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleted = await Entrenamiento.findByIdAndDelete(id)
        if (!deleted) return res.status(404).json({ message: "Entrenamiento no encontrado" })
        res.status(200).json({ message: "Entrenamiento eliminado" })
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getEntrenamientos,
    postEntrenamiento,
    getEjercicios,
    deleteEntrenamiento
}