import React from 'react';
import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/productos/'

// const ProductTable = ({ Productos }) => {
const ProductTable = () => {
    const [productos, setProducto] = useState([])
    useEffect( ()=>{
        getProductos()
    },[])

    // Procedimiento para mostrar todos los productos
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    // Procedimiento para eliminar un Productos
    const deleteProducto = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProductos()
    }

    return (
        <>
        <div className="header">
            <div className="title">Productos</div>
            <div className="actions">
                <button className="btn2 add">
                    <Link to="/Producto/Create" className="no-underline">
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
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Proveedor</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.descripcion}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.proveedor}</td>
                        <td>{producto.categoria}</td>
                        <td>{producto.estado}</td>
                       <td> 
                                <button className="btn2 editar">
                                    <Link to={`/Producto/Edit/${producto.id}`} className="no-underline">
                                    <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Editar
                                    </Link>
                                </button>
                                <button onClick={() => deleteProducto(producto.id)} className="btn2 eliminar">
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

export default ProductTable;


