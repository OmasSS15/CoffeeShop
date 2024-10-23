import React from 'react';
import './AboutUs.css';

const aboutus = () => {
  return (
<body class="aboutus">
    {/* <header>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <div class="auth-buttons">
                <a href="#" class="register-button">Regístrate</a>
                <a href="#" class="login-button">Iniciar Sesión</a>
            </div>
        </nav>
    </header> */}

    <section class="about">
        <h1>Girls & Mau Mau's Coffee</h1>
        <h2>Acerca de</h2>
        <div class="mission-vision">
            <div class="mission-container">
                <div class="mission-header">
                    <h1>Misión</h1>
                </div>
                <div class="mission-body">
                    <p>En este pequeño emprendimiento buscamos que nuestros clientes empiecen bien su día con un buen desayuno y un café a todo el público.</p>
                </div>
            </div>

            <div class="vision-container">
                <div class="vision-header">
                    <h1>Visión</h1>
                </div>
                <div class="vision-body">
                    <p>Se planea la expansión en diversas áreas en la ciudad con precios y engrandecer nuestra compañía.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <footer>
        <p>2024 Girls & Mau Mau's Coffee. Todos los derechos reservados.</p>
        <p>Correo: info@girls&MauMau</p>
    </footer> */}
</body>
  );
};

export default aboutus;
