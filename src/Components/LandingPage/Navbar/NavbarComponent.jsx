/*./ -> Significa que esta en el mismo nivel de carpetas*/
import './NavbarComponent.css'
/*../ -> Significa que esta en otro nivel superior de carpetas */ 
/*En este caso, mi archivo Inria-Seria.css esta a 3 niveles, ya que para llegar a la carpeta de NavbarComponent.jsx
necesitas pasar por la carpeta LandingPage, luego por la carpeta Navvar hasta llegar al archivo*/
import '../../../Components/Letras/Inria-Seria.css'
import '../../../Components/Letras/Alfa-Slab-One.css'
import '../../../Components/Letras/Anton.css'
import '../../../Components/Letras/Kadwa.css'

import React from 'react'

const NavbarComponent = () => {
  return (
    <div>
        {/*header.navbar: Te pone la etiqueta header + una clase */}
        <header className="navbar">
            {/*nav.logo: Te pone la etiqueta nav + una clase */}
            <nav className="logo">
                <img src="/LOGOCAFE.png" alt="Logo" className="logo-image" />
            </nav>
            <ul className="pestañas alfa-slab-one-regular">
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Acerca de">Acerca de</a></li>
                <li><a href="#Menu">Menú</a></li>
                <li><a href="#Contacto">Contacto</a></li>
            </ul>

            <nav className="botones">
                <button className="btn btn1-color anton-regular">Regístrate</button>
                <button className="btn btn2-color anton-regular">Iniciar Sesión</button>
            </nav>

        </header>
    </div>
  )
}

export default NavbarComponent
