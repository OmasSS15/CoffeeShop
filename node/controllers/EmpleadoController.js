//Importamos el Modelo
import EmpleadoModel from "../models/EmpleadoModel.js";

// Métodos para el CRUD

//Mostrar todos los registros
// aysnc:  Puede realizar operaciones que toman tiempo (como llamadas a una API) sin bloquear el flujo del código.
export const getAllEmpleados = async (req, res) => {
    try {
        // await: Su propósito es esperar a que la promesa se resuelva o rechace antes de continuar con el resto del código.
        const empleados = await EmpleadoModel.findAll()
        res.json(empleados)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getEmpleado = async (req, res) => {
    try {
        const empleado = await EmpleadoModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(empleado[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createEmpleado = async (req, res) => {
    try {
        await EmpleadoModel.create(req.body)
        res.json( {
            "message": "¡Registro creado correctamente"
        } )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateEmpleado = async (req, res) => {
    try {
        await EmpleadoModel.update(req.body, {
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
export const deleteEmpleado = async (req, res) => {
    try {
        await EmpleadoModel.destroy({
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