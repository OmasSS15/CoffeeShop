import React from 'react'
import './BlogComponent.css'

const BlogComponent = () => {
  return (
    <div>
        <header>
            <h1>RUN & LIVE</h1>
            <h2>SNEAKER SHOP</h2>
            <section className="blog">
                <article>
                    <h3>Las últimas tendencias en calzado</h3>
                    <p>Descubre las últimas tendencias y consejos sobre los mejores zapatos para cada ocasión.</p>
                    <p>Te damos consejos para elegir el zapato perfecto que combine con tu estilo y comodidad</p>
                </article>
        
                <button className="cta-button">Compra Ahora</button>
            </section>
        </header>
    </div>
  )
}

export default BlogComponent
