//Aquí se importa la conexión a la BD
import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const InventarioModel = db.define('inventario', {
    // title:{ type: DataTypes.STRING },
    // content:{ type: DataTypes.STRING },

    // Aquí se coloca las columnas de la tabla:
    producto: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    stock_inicial: { 
        type: DataTypes.INTEGER, 
        allowNull: false // Permite valores NULL
    },
    stock_actual: { 
        type: DataTypes.INTEGER, 
        allowNull: false // No permite valores NULL
    },
    umbral_reorden: { 
        // type: DataTypes.DECIMAL(10, 2),
        type: DataTypes.INTEGER,  
        allowNull: false // No permite valores NULL
    },
},
{
    timestamps: false, // Desactiva createdAt y updatedAt
}

)

export default InventarioModel