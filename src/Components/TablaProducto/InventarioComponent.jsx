import React from 'react';

const InventarioTable = ({ inventarios }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Id Producto</th>
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
                        <td>{inventario.idProducto}</td>
                        <td>{inventario.stockInicial}</td>
                        <td>{inventario.stockActual}</td>
                        <td>{inventario.umbralReorden}</td>
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

export default InventarioTable;
