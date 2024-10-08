import React from 'react'
import './BlogComponent.css'

import '../../../Components/Letras/Inria-Seria.css'
import '../../../Components/Letras/Alfa-Slab-One.css'
import '../../../Components/Letras/Anton.css'
import '../../../Components/Letras/Kadwa.css'

const BlogComponent = () => {
  return (
    <div>
        <nav className='block'>
            <h1 className='inria-serif-bold-italic'>Girls & Mau Mau’s Coffee</h1>
            <section className="blog">
                <article>
                    <h3 className='inria-serif-bold-italic'>¡Bienvenidos a Girls & Mau Mau’s Coffee!</h3>
                    <br />
                    <p className='kadwa-regular'>
                      En el corazón de Mérida, disfruta de nuestro café artesanal y 
                      deliciosos acompañamientos en un ambiente acogedor. Cada 
                      bebida se prepara con ingredientes selectos y mucho cariño. 
                    </p>
                    <p className='kadwa-regular'>¡Te esperamos!</p>
                </article>
        
                <button className="cta-button anton-regular">VER MÁS...</button>
            </section>
        </nav>
    </div>
  )
}

export default BlogComponent