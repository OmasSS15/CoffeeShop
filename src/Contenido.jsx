import React from 'react';
import Navbar from './Components/TablaProducto/NavbarComponent';
import Header from './Components/TablaProducto/HeaderComponent';
import ProductTable from './Components/TablaProducto/TablaComponent';
import './tabla.css';  

const cont = () => {
    const products = [
        { id: 1, name: "Takis", description: "Sabrita de chile de Barcel", price: "$ MXN 18.00", providerId: 5, category: "Botanas", status: "Disponible" },
        { id: 2, name: "Yoghurt de Fresa", description: "Lácteo con sabor a fresa 100ml", price: "$ MXN 25.00", providerId: 9, category: "Lácteos", status: "Agotado" },
        { id: 3, name: "Pasta Dental", description: "Textura pastosa con sabor menta", price: "$ MXN 22.00", providerId: 12, category: "Higiene", status: "Agotado" },
    ];

    return (
        <div>
            <Navbar />
            <Header title="Productos" />
            <ProductTable products={products} />
        </div>
    );
}

export default cont;


