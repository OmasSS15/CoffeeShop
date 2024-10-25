//rafce: Comnando para importar una funcion de react en automatico
//¿Que es un Componente?: Es una pieza de codigo que se puede reutilizar
import React from 'react'

import NavbarComponent from './Components/LandingPage/Navbar/NavbarComponent'
import FooterComponent from './Components/LandingPage/Footer/FooterComponent'
import BlogComponent from './Components/LandingPage/Blog/BlogComponent'
import PostreComponent from './Components/LandingPage/Postres/PostreComponent'
import Contacto from './Contacto'
import AboutUs from './AboutUs'
import Table from './Producto'
import Table1 from './Inventario'
import Table2 from './Proveedores'
import Table3 from './Ventas'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* index ayuda a que lo primero que se muestre sea esta ruta */}
        <Route 
          index 
          path="/" 
          element={
            <>
              <div>
                <header><NavbarComponent /></header>
      
                <div className="app-content"> {/* Esta es la parte que tendrá el fondo */}
                  <BlogComponent />
                  <PostreComponent />
                </div>

                <footer><FooterComponent /></footer>
              </div>
            </>  
          
          }/>
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca_de" element={<AboutUs />} />
          <Route path="/Producto" element={<Table />} />
          <Route path="/Inventario" element={<Table1 />} />
          <Route path="/Proveedores" element={<Table2 />} />
          <Route path="/Ventas" element={<Table3 />} />

      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App




/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
