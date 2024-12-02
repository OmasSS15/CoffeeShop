import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import ProductoTable from '../Components/TablesComponent/Productos/ShowProducto';
import './tabla.css';  

import CompCreateProducto from '../Components/TablesComponent/Productos/CreateProducto';
import CompEditProducto from '../Components/TablesComponent/Productos/EditProducto';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const cont = () => {
    // const products = [
    //     { id: 1, name: "Takis", description: "Sabrita de chile de Barcel", price: "$ MXN 18.00", provedorId: 5, category: "Botanas", status: "Disponible" },
    //     { id: 2, name: "Yoghurt de Fresa", description: "Lácteo con sabor a fresa 100ml", price: "$ MXN 25.00", provedorId: 9, category: "Lácteos", status: "Agotado" },
    //     { id: 3, name: "Pasta Dental", description: "Textura pastosa con sabor menta", price: "$ MXN 22.00", provedorId: 12, category: "Higiene", status: "Agotado" },
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
                <ProductoTable />
                </div>
            </>  
          
            }/>
        <Route path="/create" element={<CompCreateProducto />} />
        <Route path="/edit/:id" element={<CompEditProducto/>} />
          

    </Routes>
    );
}

export default cont;


