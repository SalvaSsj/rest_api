import express from 'express'
import router from './router'
import db from './config/db'

//Conetar a base de datos
async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log('Conexion exitosa')
    }catch(error){
        console.log(error)
        console.log('Hubo un error al conectar a la BD')
    }
}

connectDB()

//Instancia de express
const server = express()

//Leer datos formulario
server.use(express.json())

server.use('/api/products', router)

export default server
