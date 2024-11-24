import React from 'react';

import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

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
        await axios.delete(`${URI}${id}`)
        getEmpleados()
    }

    return (
        <>
        <div className="header">
            <div className="title">Empleados</div>
            <div className="actions">
                <button className="btn2 add">
                    <Link to="/Empleado/Create" className="no-underline">
                    <FontAwesomeIcon icon={faPlus} />&nbsp;Agregar
                    </Link>
                </button>
            </div>
        </div>
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
                            <td>${empleado.salario}</td>
                            <td>{empleado.fecha_contratacion}</td>
                            <td> 
                                <button className="btn2 editar">
                                    <Link to={`/Empleado/Edit/${empleado.id}`} className="no-underline">
                                    <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Editar
                                    </Link>
                                </button>
                                <button onClick={() => deleteEmpleado(empleado.id)} className="btn2 eliminar">
                                    <FontAwesomeIcon icon={faTrash} />&nbsp;Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default EmpleadoTable;
