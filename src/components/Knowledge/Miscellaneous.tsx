import React from 'react';

const Miscellaneous = () => {
    return (
        <div id="miscellaneous">
            <h3>Autres compétences</h3>
            <div id="miscellaneous-list">
                <ul>
                    <li><i className="fas fa-check-square"><span>Linux</span></i></li>
                    <li><i className="fas fa-check-square"><span>HTTP</span></i></li>
                    <li><i className="fas fa-check-square"><span>REST</span></i></li>
                    <li><i className="fas fa-check-square"><span>UML</span></i></li>
                </ul>
                <ul>
                    <li><i className="fas fa-check-square"><span>Docker</span></i></li>
                    <li><i className="fas fa-check-square"><span>Git</span></i></li>
                    <li><i className="fas fa-check-square"><span>Postman</span></i></li>
                    <li><i className="fas fa-check-square"><span>Caddy Server</span></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Miscellaneous;