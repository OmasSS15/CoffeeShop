import React from 'react';

const EmpleadoTable = ({ empleados }) => {
    return (
        <table className="product-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Puesto</th>
                    <th>Salario</th>
                    <th>Fecha de Contratacion</th>
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
                        <td>{empleado.fechContratat}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmpleadoTable;
