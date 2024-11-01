import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Proveedor_id</th>
                    <th>Categoría</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.provedorId}</td>
                        <td>{product.category}</td>
                        <td>{product.status}</td>
                        <td>
                            <button className="btn2 editar">Editar</button>
                            <button className="btn2 eliminar">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;


