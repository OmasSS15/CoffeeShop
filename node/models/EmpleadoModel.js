//Aquí se importa la conexión a la BD
import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const EmpleadoModel = db.define('empleados', {
    title:{ type: DataTypes.STRING },
    content:{ type: DataTypes.STRING },
})

export default EmpleadoModel