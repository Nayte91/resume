import React from 'react';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="not-found">
            <div id="not-found-content">
                <h3>Désolé, cette page n'existe pas !</h3>
                <NavLink exact to="/" >
                    <i className="fas fa-home"><span>Accueil</span></i>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;