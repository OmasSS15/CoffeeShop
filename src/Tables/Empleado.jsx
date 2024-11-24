import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import EmpleadoTable from '../Components/TablesComponent/Empleados/ShowEmpleado';
import './tabla.css';  
import CompCreateEmpleado from '../Components/TablesComponent/Empleados/CreateEmpleado';
import CompEditEmpleado from '../Components/TablesComponent/Empleados/EditEmpleado';

import { BrowserRouter, Route, Routes } from 'react-router-dom'



const Cont = () => {
    // const empleados = [
    //     { id: 1, nombre: "Mauricio", apellido: "Avila", puesto: "CEO", salario: "$4000.00", fechContratat: "12/05/2005" },
    //     { id: 2, nombre: "Jenifer", apellido: "Gonzalez", puesto:"Empleado", salario: "$1500.00", fechContratat: "04/09/2020" },
    //     { id: 3, nombre: "Andrea" , apellido: "Ramos", puesto: "Administrativo", salario: "$2200.00", fechContratat: "11/02/2012" },
    //     { id: 4, nombre: "Evelyn" , apellido: "Vazquez", puesto: "Gerente", salario: "$3000.00", fechContratat: "24/07/2007", },
    // ];
    

    return (
    
    <Routes>
        <Route 
            path="/" 
            element={
            <>
              <div>
                <Navbar />
                {/* <Header title="Empleados" /> */}
                {/* <EmpleadoTable empleados={empleados} /> */}
                <EmpleadoTable />
                </div>
            </>  
          
            }/>
        <Route path="/create" element={<CompCreateEmpleado />} />
        <Route path="/edit/:id" element={<CompEditEmpleado/>} />
          

    </Routes>
    

        
    );
}

export default Cont;


