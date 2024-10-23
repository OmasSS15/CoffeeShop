/*./ -> Significa que esta en el mismo nivel de carpetas*/
import './NavbarComponent.css'
/*../ -> Significa que esta en otro nivel superior de carpetas */ 
/*En este caso, mi archivo Inria-Seria.css esta a 3 niveles, ya que para llegar a la carpeta de NavbarComponent.jsx
necesitas pasar por la carpeta LandingPage, luego por la carpeta Navvar hasta llegar al archivo*/
import '../../../Components/Tipografia/Inria-Seria.css'
import '../../../Components/Tipografia/Alfa-Slab-One.css'
import '../../../Components/Tipografia/Anton.css'
import '../../../Components/Tipografia/Kadwa.css'

import { Link } from 'react-router-dom';

import React from 'react'

const NavbarComponent = () => {
  return (
    <div>
        {/*header.navbar: Te pone la etiqueta header + una clase */}
        <nav className="navbar">
            {/*nav.logo: Te pone la etiqueta nav + una clase */}
            <nav className="logo">
                <img src="/LOGOCAFE.png" alt="Logo" className="logo-image" />
            </nav>
            <ul className="pestañas alfa-slab-one-regular">
                <li><a href="#Inicio">
                    <Link to="/" replace={true}>Inicio</Link>
                </a></li>
                <li><a href="#Acerca de">
                    <Link to="/acerca_de" >Acerca de</Link>
                </a></li>
                <li><a href="#Menu">Menú</a></li>
                <li><a href="#Contacto">
                    <Link to="/contacto">Contacto</Link>
                </a></li>
            </ul>

            <nav className="botones">
                <button className="btn animate-text anton-regular">Regístrate</button>
                <button className="btn animate-text anton-regular">Iniciar Sesión</button>
            </nav>

        </nav>
    </div>
  )
}

export default NavbarComponent
