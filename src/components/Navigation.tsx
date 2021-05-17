import React from 'react';
import { NavLink } from "react-router-dom";
import {networksData} from "../data/networksData";

const Navigation = () => {
    return (
        <div id="sidebar">
            <div id="identity">
                <div id="identity-content">
                    <img src="./media/JR2.jpg" alt="Profile"/>
                    <h3>Julien Robic</h3>
                </div>
            </div>

            <div id="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home" />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain" />
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images" />
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book" />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div id="social-networks-bubbles">
                <ul>
                    { networksData.map(network => {
                        return(
                            <li key={network.name}>
                                <a href={network.url} target="_blank" rel="noopener noreferrer">
                                    <i className={network.icon} />
                                </a>
                            </li>
                        );
                    }) }
                </ul>

                <div id="signature">
                    <p>Julien Robic - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;