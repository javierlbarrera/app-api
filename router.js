const express = require('express')
const {postLogin, getEntrenamientos, getEntrenamientoById, postEntrenamiento, getEjercicios, deleteEntrenamiento, putEntrenamiento} = require('./controllers')
const router = express.Router()

router.route('/login')
    .post(postLogin)

router.route('/entrenamientos')
    .get(getEntrenamientos)
    .post(postEntrenamiento)

router.route('/ejercicios')
    .get(getEjercicios)

router.route('/entrenamientos/:id')
    .get(getEntrenamientoById)
    .put(putEntrenamiento)   
    .delete(deleteEntrenamiento)
    
// Handlers copiados de los proyectos de clase
router.all('*', ( req , res , next )=>{
    const error = new Error()
            error.status = 404
            error.message = `Endpoint no existe`
    next(error)
})

router.use(( error , req , res , next )=>{
    let { status , message } = error
        status  = status || 500
        message = message || `Error interno`

    res.status(status).json(message)
})

module.exports = {
    router
}