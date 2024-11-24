import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import ProveedoresTable from '../Components/TablesComponent/Proveedores/ShowProveedor';
import './tabla.css';  

const Cont = () => {
    const proveedores = [
        { id: 1, nombre: "Esther Arredondo", contacto: 9991348846, productSuminis: "Botanas"},
        { id: 2, nombre: "Diego Gonzalez", contacto: 9992569216, productSuminis: "Lacteos"},
        { id: 3, nombre: "Marcela Sandoval", contacto: 9999084523, productSuminis: "Limpieza del Hogar"},
    ];
    

    return (
        <div>
            <Navbar />
            <Header title="Proveedores" />
            <ProveedoresTable proveedores={proveedores}/>
        </div>
    );
}

export default Cont;


