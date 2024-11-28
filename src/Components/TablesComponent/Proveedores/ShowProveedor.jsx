import React from 'react';

import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/proveedores/'

// const proveedorTable = ({ proveedores }) => {
const ProveedorTable = () => {
    const [proveedores, setProveedor] = useState([])
    useEffect( ()=>{
        getProveedores()
    },[])

    // Procedimiento para mostrar todos los proveedores
    const getProveedores = async () => {
        const res = await axios.get(URI)
        setProveedor(res.data)
    }

    // Procedimiento para eliminar un proveedor
    const deleteProveedor = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProveedores()
    }

    return (
        <>
        <div className="header">
            <div className="title">Proveedores</div>
            <div className="actions">
                <button className="btn2 add">
                    <Link to="/Proveedor/Create" className="no-underline">
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
                        <th>Contacto</th>
                        <th>Productos Suministrados</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td>{proveedor.id}</td>
                            <td>{proveedor.nombre}</td>
                            <td>+52 {proveedor.contacto}</td>
                            <td>{proveedor.produc_sumin	}</td>
                            <td> 
                                <button className="btn2 editar">
                                    <Link to={`/Proveedor/Edit/${proveedor.id}`} className="no-underline">
                                    <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Editar
                                    </Link>
                                </button>
                                <button onClick={() => deleteProveedor(proveedor.id)} className="btn2 eliminar">
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

export default ProveedorTable;

