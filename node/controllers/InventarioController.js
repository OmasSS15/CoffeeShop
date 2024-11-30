//Importamos el Modelo
import InventarioModel from "../models/InventarioModel.js";

// Métodos para el CRUD

//Mostrar todos los registros
// aysnc:  Puede realizar operaciones que toman tiempo (como llamadas a una API) sin bloquear el flujo del código.
export const getAllInventarios = async (req, res) => {
    try {
        // await: Su propósito es esperar a que la promesa se resuelva o rechace antes de continuar con el resto del código.
        const inventarios = await InventarioModel.findAll()
        res.json(inventarios)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getInventario = async (req, res) => {
    try {
        const inventario = await InventarioModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(inventario[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createInventario = async (req, res) => {
    try {
        await InventarioModel.create(req.body)
        res.json( {
            "message": "¡Registro creado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateInventario = async (req, res) => {
    try {
        await InventarioModel.update(req.body, {
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
export const deleteInventario = async (req, res) => {
    try {
        await InventarioModel.destroy({
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