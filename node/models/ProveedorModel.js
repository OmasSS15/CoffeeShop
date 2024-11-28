//Aquí se importa la conexión a la BD
import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const ProveedorModel = db.define('proveedores', {
    // title:{ type: DataTypes.STRING },
    // content:{ type: DataTypes.STRING },

    // Aquí se coloca las columnas de la tabla:
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    contacto: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
    produc_sumin: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
},
{
    timestamps: false, // Desactiva createdAt y updatedAt
}

)

export default ProveedorModel