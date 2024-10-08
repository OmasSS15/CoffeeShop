import React from 'react'
import './FooterComponent.css'
import '../../../Components/Tipografia/Inria-Seria.css'
import '../../../Components/Tipografia/Alfa-Slab-One.css'
import '../../../Components/Tipografia/Anton.css'
import '../../../Components/Tipografia/Kadwa.css'

const FooterComponent = () => {
  return (
    <div>
        <nav className="footer inria-serif-regular">
            <p>&copy; 2024 Girls & Mau Mau’s Coffee. Todos los derechos reservados.</p>
            <p>Contacto: info@girls&mau.com</p>
        </nav>
    </div>
  )
}

export default FooterComponent
