import { NavLink } from "react-router-dom";
import networksData from "../data/networksData";

const Navigation = () => {
    return (
        <aside className="sidebar">
            <header className="identity">
                <div className="identity__content">
                    <img src="./media/JR2.png" alt="Profile" width="160"/>
                    <h3>Julien Robic</h3>
                </div>
            </header>

            <nav className="navigation">
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
            </nav>

            <footer className="social-networks-bubbles">
                <ul>
                    {
                        networksData.map(network => {
                            return (
                                <li key={ network.name }>
                                    <a href={ network.url } target="_blank" rel="noopener noreferrer">
                                        <i className={ network.icon } />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="signature">
                    <p>Julien 'Nayte' Robic - 2021</p>
                </div>
            </footer>
        </aside>
    );
};

export default Navigation;