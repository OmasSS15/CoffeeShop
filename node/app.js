import express from "express";
import cors from 'cors';

//Importamos la conexión a la BD
import db from "./database/db.js";

//Importamos el enrutador
import routes from "./routes/routes.js";

const app = express()

app.use( cors())
app.use( express.json())
app.use('/empleados', routes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la BD')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

// Es para que se conecte con el puerto 8000 de React, ya que él usa el 3000
app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})

