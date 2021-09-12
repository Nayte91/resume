import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="page__notfound">
            <div className="notfound__content">
                <h3>Désolé, cette page n'existe pas !</h3>
                <NavLink exact to="/" >
                    <i className="fas fa-home"><span>Accueil</span></i>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;