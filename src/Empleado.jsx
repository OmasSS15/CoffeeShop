import React from 'react';
import Navbar from './Components/TablaProducto/NavbarComponent';
import Header from './Components/TablaProducto/HeaderComponent';
import EmpleadoTable from './Components/TablaProducto/EmpleadoComponent';
import './tabla.css';  

const Cont = () => {
    const empleados = [
        { id: 1, nombre: "Mauricio", apellido: "Avila", puesto: "CEO", salario: "$4000.00", fechContratat: "12/05/2005" },
        { id: 2, nombre: "Jenifer", apellido: "Gonzalez", puesto:"Empleado", salario: "$1500.00", fechContratat: "04/09/2020" },
        { id: 3, nombre: "Andrea" , apellido: "Ramos", puesto: "Administrativo", salario: "$2200.00", fechContratat: "11/02/2012" },
        { id: 4, nombre: "Evelyn" , apellido: "Vazquez", puesto: "Gerente", salario: "$3000.00", fechContratat: "24/07/2007", },
    ];
    

    return (
        <div>
            <Navbar />
            <Header title="Empleados" />
            <EmpleadoTable empleados={empleados} />
        </div>
    );
}

export default Cont;


