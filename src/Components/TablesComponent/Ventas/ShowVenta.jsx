import React from 'react';

import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/ventas/'
// const proveedorTable = ({ proveedores }) => {
    const VentasTable = () => {
        const [Ventas, setVenta] = useState([])
        useEffect( ()=>{
            getVentas()
        },[])
    
        // Procedimiento para mostrar todos los proveedores
        const getVentas = async () => {
            const res = await axios.get(URI)
            setVenta(res.data)
        }
    
        // Procedimiento para eliminar un proveedor
        const deleteVenta = async (id) => {
            await axios.delete(`${URI}${id}`)
            getVentas()
        }
    

        return (
            <>
            <div className="header">
                <div className="title">Ventas</div>
                <div className="actions">
                    <button className="btn2 add">
                        <Link to="/Ventas/Create" className="no-underline">
                        <FontAwesomeIcon icon={faPlus} />&nbsp;Agregar
                        </Link>
                    </button>
                </div>
            </div>
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Empleado</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Metodo de pago</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                        {Ventas.map((venta) => (
                <tr key={venta.id}>
                    <td>{venta.id}</td>
                    <td>{venta.fecha}</td>
                    <td>{venta.empleado}</td>
                    <td>{venta.producto}</td>
                    <td>{venta.cantidad}</td>
                    <td>{venta.total}</td>
                    <td>{venta.metodo_pago}</td>
                    <td>
                    <button className="btn2 editar">
                                    <Link to={`/ventas/Edit/${venta.id}`} className="no-underline">
                                    <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Editar
                                    </Link>
                                </button>
                                <button onClick={() => deleteVenta(venta.id)} className="btn2 eliminar">
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

export default VentasTable;
