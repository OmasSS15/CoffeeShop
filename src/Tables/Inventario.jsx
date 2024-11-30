import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import InventarioTable from '../Components/TablesComponent/Inventario/ShowInventario';
import './tabla.css';  
import CompCreateInventario from '../Components/TablesComponent/Inventario/CreateInventario';
import CompEditInventario from '../Components/TablesComponent/Inventario/EditInventario';

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
                <InventarioTable />
                </div>
            </>  
          
            }/>
        <Route path="/create" element={<CompCreateInventario />} />
        <Route path="/edit/:id" element={<CompEditInventario/>} />
          

    </Routes>
    );
}

export default Cont;


