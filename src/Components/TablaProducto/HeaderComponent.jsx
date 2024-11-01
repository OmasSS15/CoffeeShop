//HEADER//
import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
            <div className="actions">
                <button className="btn2 add">+ Agregar</button>
            </div>
        </div>
    );
}

export default Header;
