import React from 'react';

const ProveedoresTable = ({ proveedores }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Contacto</th>
                    <th>Productos Suministrados</th>
                </tr>
            </thead>
            <tbody>
                {proveedores.map((proveedor) => (
                    <tr key={proveedor.id}>
                        <td>{proveedor.id}</td>
                        <td>{proveedor.nombre}</td>
                        <td>{proveedor.contacto}</td>
                        <td>{proveedor.productSuminis}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProveedoresTable;
