import React from 'react';
import { NavLink } from "react-router-dom";
import { networksData } from "../data/networksData";

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="identity">
                <div className="identity-content">
                    <img src="./media/JR2.png" alt="Profile" width="160"/>
                    <h3>Julien Robic</h3>
                </div>
            </div>

            <div className="navigation">
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

            <div className="social-networks-bubbles">
                <ul>
                    {
                        networksData.map(network => {
                            return (
                                <li key={network.name}>
                                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                                        <i className={network.icon} />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="signature">
                    <p>Julien Robic - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;