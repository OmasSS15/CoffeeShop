import React from 'react';

import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/inventario/'

// const InventarioTable = ({ Inventarios }) => {
const InventarioTable = () => {
    const [inventarios, setInventario] = useState([])
    useEffect( ()=>{
        getInventarios()
    },[])

    // Procedimiento para mostrar todos los Inventarios
    const getInventarios = async () => {
        const res = await axios.get(URI)
        setInventario(res.data)
    }

    // Procedimiento para eliminar un Inventario
    const deleteInventario = async (id) => {
        await axios.delete(`${URI}${id}`)
        getInventarios()
    }

    return (
        <>
        <div className="header">
            <div className="title">Inventarios</div>
            <div className="actions">
                <button className="btn2 add">
                    <Link to="/Inventario/Create" className="no-underline">
                    <FontAwesomeIcon icon={faPlus} />&nbsp;Agregar
                    </Link>
                </button>
            </div>
        </div>
        <table className="product-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Stock Inicial</th>
                        <th>Stock Actual</th>
                        <th>Umbral Reorden</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {inventarios.map((inventario) => (
                        <tr key={inventario.id}>
                            <td>{inventario.id}</td>
                            <td>{inventario.producto}</td>
                            <td>{inventario.stock_inicial}</td>
                            <td>{inventario.stock_actual}</td>
                            <td>{inventario.umbral_reorden}</td>
                            <td> 
                                <button className="btn2 editar">
                                    <Link to={`/Inventario/Edit/${inventario.id}`} className="no-underline">
                                    <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Editar
                                    </Link>
                                </button>
                                <button onClick={() => deleteInventario(inventario.id)} className="btn2 eliminar">
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

export default InventarioTable;