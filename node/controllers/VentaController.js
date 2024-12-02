//Importamos el Modelo
import VentaModel from "../models/VentaModel.js"

// Métodos para el CRUD

//Mostrar todos los registros
// aysnc:  Puede realizar operaciones que toman tiempo (como llamadas a una API) sin bloquear el flujo del código.
export const getAllVentas = async (req, res) => {
    try {
        // await: Su propósito es esperar a que la promesa se resuelva o rechace antes de continuar con el resto del código.
        const ventas = await VentaModel.findAll()
        res.json(ventas)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getVenta = async (req, res) => {
    try {
        const venta = await VentaModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(venta[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createVenta = async (req, res) => {
    try {
        await VentaModel.create(req.body)
        res.json( {
            "message": "¡Registro creado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateVenta = async (req, res) => {
    try {
        await VentaModel.update(req.body, {
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
export const deleteVenta = async (req, res) => {
    try {
        await VentaModel.destroy({
            // Especificamos que vamos a eliminar
            where: {id: req.params.id}
        })
        res.json( {
            "message": "¡Registro eliminado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}