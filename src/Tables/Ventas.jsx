import React from 'react';
import Navbar from '../Components/TablesComponent/NavbarComponent';
import Header from '../Components/TablesComponent/HeaderComponent';
import VentasTable from '../Components/TablesComponent/Ventas/ShowVenta';
import './tabla.css';  

const Cont = () => {
    const ventas = [
        { id: 1, fecha: '2024-10-01', hora: '10:00', metpago: 'Efectivo', total: 500, empleadoId: 101 },
        { id: 2, fecha: '2024-10-02', hora: '11:30', metpago: 'Tarjeta', total: 300, empleadoId: 102 },
        { id: 3, fecha: '2024-10-03', hora: '14:00', metpago: 'Transferencia', total: 450, empleadoId: 103 },
    ];
    
    

    return (
        <div>
            <Navbar />
            <Header title="Ventas" />
            <VentasTable ventas={ventas} />
        </div>
    );
}

export default Cont;


