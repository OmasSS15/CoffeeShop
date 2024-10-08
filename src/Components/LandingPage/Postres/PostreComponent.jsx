import React from 'react'
import './PostreComponent.css'
import postre from '../../../assets/Imagen/bebidas.jpeg'
import postre1 from '../../../assets/Imagen/galletas.jpeg'
import postre2 from '../../../assets/Imagen/panes.jpeg'
import postre3 from '../../../assets/Imagen/pasteles.jpeg'
import '../../../Components/Tipografia/Inria-Seria.css'
import '../../../Components/Tipografia/Alfa-Slab-One.css'
import '../../../Components/Tipografia/Anton.css'
import '../../../Components/Tipografia/Kadwa.css'

const PostreComponent = () => {
  return (
    <div className='contenedor'>
      <nav className='card'>
        <img src={postre} alt="postre" className='img-postre'/>
        <h1 className='inria-serif-bold-italic'>Bebidas</h1>
      </nav>
      <nav className='card'>
        <img src={postre1} alt="postre" className='img-postre'/>
        <h1 className='inria-serif-bold-italic'>Galletas</h1>
      </nav>
      <nav className='card'>
        <img src={postre2} alt="postre" className='img-postre'/>
        <h1 className='inria-serif-bold-italic'>Panes</h1>
      </nav>
      <nav className='card'>
        <img src={postre3} alt="postre" className='img-postre'/>
        <h1 className='inria-serif-bold-italic'>Pasteles</h1>
      </nav>
    </div>
  )
}

export default PostreComponent
