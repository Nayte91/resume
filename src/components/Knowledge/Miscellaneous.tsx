import React from 'react';

const Miscellaneous = () => {
    return (
        <div id="miscellaneous">
            <h3>Autres compétences</h3>
            <div id="miscellaneous-list">
                <ul>
                    <li><i className="fas fa-check-square"> Linux</i></li>
                    <li><i className="fas fa-check-square"> HTTP</i></li>
                    <li><i className="fas fa-check-square"> REST</i></li>
                    <li><i className="fas fa-check-square"> UML</i></li>
                </ul>
                <ul>
                    <li><i className="fas fa-check-square"> Docker</i></li>
                    <li><i className="fas fa-check-square"> Git</i></li>
                    <li><i className="fas fa-check-square"> Postman</i></li>
                    <li><i className="fas fa-check-square"> Caddy Server</i></li>
                </ul>
            </div>
        </div>
    );
};

export default Miscellaneous;