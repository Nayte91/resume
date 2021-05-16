import React from 'react';

const Hobbies = () => {
    return (
        <div id="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Arts martiaux</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Jeux vidéos</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Astrophysique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-tree"></i>
                    <span>Ecologie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dog"></i>
                    <span>Chiens</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;