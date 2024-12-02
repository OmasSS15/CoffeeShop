import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import VentasTable from '../Components/TablesComponent/Ventas/ShowVenta';
import './tabla.css';  
import CompCreateVenta from '../Components/TablesComponent/Ventas/CreateVenta';
import CompEditVenta from '../Components/TablesComponent/Ventas/EditVenta';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Cont = () => {

    return (
        <Routes>
        <Route 
            path="/" 
            element={
            <>
              <div>
                <Navbar />
                {/* <Header title="Inventarios" /> */}
                {/* <InventarioTable Inventarios={Inventarios} /> */}
                <VentasTable />
                </div>
            </>  
          
            }/>
        <Route path="/create" element={<CompCreateVenta/>} />
        <Route path="/edit/:id" element={<CompEditVenta/>} />
          

    </Routes>
    );
}

export default Cont;

