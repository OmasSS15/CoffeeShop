import React from 'react'
import './FooterComponent.css'
import '../../../Components/Letras/Inria-Seria.css'
import '../../../Components/Letras/Alfa-Slab-One.css'
import '../../../Components/Letras/Anton.css'
import '../../../Components/Letras/Kadwa.css'

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
