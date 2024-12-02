//Importamos el Modelo
import ProductoModel from "../models/ProductoModel.js";

// Métodos para el CRUD

//Mostrar todos los registros
// aysnc:  Puede realizar operaciones que toman tiempo (como llamadas a una API) sin bloquear el flujo del código.
export const getAllProductos = async (req, res) => {
    try {
        // await: Su propósito es esperar a que la promesa se resuelva o rechace antes de continuar con el resto del código.
        const productos = await ProductoModel.findAll()
        res.json(productos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getProducto = async (req, res) => {
    try {
        const producto = await ProductoModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(producto[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createProducto = async (req, res) => {
    try {
        await ProductoModel.create(req.body)
        res.json( {
            "message": "¡Registro creado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateProducto = async (req, res) => {
    try {
        await ProductoModel.update(req.body, {
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
export const deleteProducto = async (req, res) => {
    try {
        await ProductoModel.destroy({
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