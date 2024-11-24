import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import InventarioTable from '../Components/TablesComponent/Inventario/ShowInventario';
import './tabla.css';  

const Cont = () => {
    const inventarios = [
        { id: 1, idProducto: 1, stockInicial: 150, stockActual: 70, umbralReorden: 50 },
        { id: 2, idProducto: 2, stockInicial: 180, stockActual: 85, umbralReorden: 90 },
        { id: 3, idProducto: 3, stockInicial: 120, stockActual: 65, umbralReorden: 60 },
    ];
    

    return (
        <div>
            <Navbar />
            <Header title="Inventario" />
            <InventarioTable inventarios={inventarios} />
        </div>
    );
}

export default Cont;


