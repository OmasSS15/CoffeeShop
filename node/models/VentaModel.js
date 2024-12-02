//Aquí se importa la conexión a la BD
import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const VentaModel = db.define('ventas', {
    // title:{ type: DataTypes.STRING },
    // content:{ type: DataTypes.STRING },

    // Aquí se coloca las columnas de la tabla:
    fecha: { 
        type: DataTypes.DATEONLY, 
        allowNull: false // Permite valores NULL
    },
    empleado: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    producto: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
    cantidad: { 
        type: DataTypes.INTEGER, 
        allowNull: false // No permite valores NULL
    },
    total: { 
        // type: DataTypes.DECIMAL(10, 2),
        type: DataTypes.FLOAT,  
        allowNull: false // No permite valores NULL
    },
    metodo_pago: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
},
{
    timestamps: false, // Desactiva createdAt y updatedAt
}

)

export default VentaModel