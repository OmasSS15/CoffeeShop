import express from "express";
import cors from 'cors';

//Importamos la conexión a la BD
import db from "./database/db.js";

//Importamos el enrutador
import EmpleadoRoutes from "./routes/EmpleadoRoutes.js";
import ProveedorRoutes from "./routes/ProveedorRoutes.js";
import InventarioRoutes from "./routes/InventarioRoutes.js";
const app = express()

app.use( cors())
app.use( express.json())
app.use('/empleados', EmpleadoRoutes)
app.use('/proveedores', ProveedorRoutes)
app.use('/inventario', InventarioRoutes)
// Así debe ser lo mismo para todos:
// "/proveedores" debe de coincidir con esto: const URI = 'http://localhost:8000/proveedores/'
// Esto ¨http://localhost:8000/proveedores/¨ se encuentra en Create, Edit y Show para cada una de las tablas

try {
    await db.authenticate()
    console.log('Conexión exitosa a la BD')
    await db.sync({ alter: true });
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.get('/', (req, res) => {
    res.send('Conexión Exitosa')
})

// Es para que se conecte con el puerto 8000 de React, ya que él usa el 3000
app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})

