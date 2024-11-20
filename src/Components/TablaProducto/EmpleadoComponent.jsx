import React from 'react';

import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/empleados/'

// const EmpleadoTable = ({ empleados }) => {
const EmpleadoTable = () => {
    const [empleados, setEmpleado] = useState([])
    useEffect( ()=>{
        getEmpleados()
    },[])

    // Procedimiento para mostrar todos los empleados
    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleado(res.data)
    }

    // Procedimiento para eliminar un empleado
    const deleteEmpleado = async (id) => {
        axios.delete(`${URI}${id}`)
        getEmpleados()
    }

    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Puesto</th>
                    <th>Salario</th>
                    <th>Fecha de Contratación</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                        <td>{empleado.id}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.apellido}</td>
                        <td>{empleado.puesto}</td>
                        <td>{empleado.salario}</td>
                        <td>{empleado.fecha_contratacion}</td>
                        <td>
                            {/* <Link to={`/edit/${blog.id}`}>
                                <button className="btn2 editar">Editar</button>
                            </Link> */}
                            <button onClick={ ()=>deleteEmpleado(empleado.id)} className="btn2 eliminar">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmpleadoTable;
