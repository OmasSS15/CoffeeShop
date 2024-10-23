//rafce: Comnando para importar una funcion de react en automatico
//¿Que es un Componente?: Es una pieza de codigo que se puede reutilizar
import React from 'react'
import NavbarComponent from './Components/LandingPage/Navbar/NavbarComponent'
import FooterComponent from './Components/LandingPage/Footer/FooterComponent'
import AboutUsComponent from './Components/AboutUs/AboutUs/'
import './App.css'

const Contacto = () => {
  return (
    <div>
      <header><NavbarComponent /></header>
      
      <div className="app-content"> {/* Esta es la parte que tendrá el fondo */}
        <AboutUsComponent />
      </div>

      <footer><FooterComponent /></footer>
    </div>
  )
}

export default Contacto

