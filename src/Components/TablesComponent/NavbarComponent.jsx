import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar2">
            <ul>
                <li><a href=""><Link to="/Inventario">Inventario</Link></a></li>
                <li><a href=""><Link to="/Producto">Productos</Link></a></li>
                <li><a href=""><Link to="/Ventas">Ventas</Link></a></li>
                <li><a href=""><Link to="/Proveedor">Prooveedores</Link></a></li>
                <li><a href=""><Link to="/Empleado">Empleados</Link></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
