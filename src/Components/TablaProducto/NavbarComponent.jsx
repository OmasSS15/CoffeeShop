import React from 'react';

import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar2">
            <ul>
                <li><a href=""><Link to="/Inventario" replace={true}>Inventario</Link></a></li>
                <li><a href=""><Link to="/Producto" replace={true}>Productos</Link></a></li>
                <li><a href=""><Link to="/Ventas" replace={true}>Ventas</Link></a></li>
                <li><a href=""><Link to="/Proveedores" replace={true}>Prooveedores</Link></a></li>
                <li><a href=""><Link to="/Empleado" replace={true}>Empleados</Link></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
