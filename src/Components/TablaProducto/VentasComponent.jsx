import React from 'react';

const VentasTable = ({ ventas }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Metodo de pago</th>
                    <th>Total</th>
                    <th>Id-Empleado</th>
                </tr>
            </thead>
            <tbody>
                        {ventas.map((venta) => (
                <tr key={venta.id}>
                    <td>{venta.id}</td>
                    <td>{venta.fecha}</td>
                    <td>{venta.hora}</td>
                    <td>{venta.metpago}</td>
                    <td>{venta.total}</td>
                    <td>{venta.empleadoId}</td>
                </tr>
            ))}

            </tbody>
        </table>
    );
}

export default VentasTable;
