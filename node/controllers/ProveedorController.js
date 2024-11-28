//Importamos el Modelo
import ProveedorModel from "../models/ProveedorModel.js";

// Métodos para el CRUD

//Mostrar todos los registros
// aysnc:  Puede realizar operaciones que toman tiempo (como llamadas a una API) sin bloquear el flujo del código.
export const getAllProveedores = async (req, res) => {
    try {
        // await: Su propósito es esperar a que la promesa se resuelva o rechace antes de continuar con el resto del código.
        const proveedores = await ProveedorModel.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getProveedor = async (req, res) => {
    try {
        const proveedor = await ProveedorModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(proveedor[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createProveedor = async (req, res) => {
    try {
        await ProveedorModel.create(req.body)
        res.json( {
            "message": "¡Registro creado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateProveedor = async (req, res) => {
    try {
        await ProveedorModel.update(req.body, {
            // Especificamos que vamos a actualizar
                where: {id: req.params.id}
        })
        res.json( {
            "message": "¡Registro actualizado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminae un registro
export const deleteProveedor = async (req, res) => {
    try {
        await ProveedorModel.destroy({
            // Especificamos que vamos a eliminar
            where: {id: req.params.id}
        })
        res.json( {
            "message": "¡Registro eliminado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}