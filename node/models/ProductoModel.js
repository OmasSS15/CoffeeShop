import db from "../database/db.js";

//Aquí se importa el sequelize
import { DataTypes } from "sequelize";

//Se define el nombre de la tabla
const ProductosModel = db.define('productos', {
    // title:{ type: DataTypes.STRING },
    // content:{ type: DataTypes.STRING },


    // Aquí se coloca las columnas de la tabla:
    nombre: { 
        type: DataTypes.STRING, 
        allowNull: false // No permite valores NULL
    },
    descripcion: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
    precio: { 
        type: DataTypes.FLOAT, 
        allowNull: false // No permite valores NULL
    },
    proveedor: { 
        // type: DataTypes.DECIMAL(10, 2),
        type: DataTypes.STRING,  
        allowNull: false // No permite valores NULL
    },
    categoria: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
    estado: { 
        type: DataTypes.STRING, 
        allowNull: false // Permite valores NULL
    },
},
{
    timestamps: false, // Desactiva createdAt y updatedAt
}

)

export default ProductosModel