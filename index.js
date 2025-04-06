console.clear()
console.log("Cargando API de gimnasio")

const {router} = require('./router')
const cors = require('cors')
const mongoose = require('mongoose')
//Al final con Mongoose, que lo tengo más practicado que Prisma

let MONGO_URL = process.env.MONGO_URL || `mongodb://localhost:27017/gimnasio`

const conectar = async ()=> await mongoose.connect(MONGO_URL)
    .then(() => console.log('Conectado a Mongo'))
    .catch(error => console.log(error.message))

conectar()

const express = require('express')
const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(router)

app.listen(3000, () => console.log('API de gimnasio inicializada'))