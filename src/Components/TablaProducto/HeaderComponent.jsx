//HEADER//
import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
            <div className="actions">
                <button className="btn add">+ Agregar</button>
                <button className="btn delete">🗑️ Eliminar</button>
                <button className="btn edit">✏️ Editar</button>
            </div>
        </div>
    );
}

export default Header;
