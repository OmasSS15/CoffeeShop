//HEADER//
import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
            <div className="actions">
                <button className="btn2 add">+ Agregar</button>
                <button className="btn2 delete">🗑️ Eliminar</button>
                <button className="btn2 edit">✏️ Editar</button>
            </div>
        </div>
    );
}

export default Header;
