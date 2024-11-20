//Aquí se importa la conexión a la BD
import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const EmpleadoModel = db.define('empleados', {
    // title:{ type: DataTypes.STRING },
    // content:{ type: DataTypes.STRING },

    // Aquí se coloca las columnas de la tabla:
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    apellido: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
    puesto: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    salario: { 
        // type: DataTypes.DECIMAL(10, 2),
        type: DataTypes.FLOAT,  
        allowNull: false // No permite valores NULL
    },
    fecha_contratacion: { 
        type: DataTypes.DATE, 
        allowNull: false // Permite valores NULL
    },
},
{
    timestamps: false, // Desactiva createdAt y updatedAt
}

)

export default EmpleadoModel