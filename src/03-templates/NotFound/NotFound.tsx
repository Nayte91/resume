import { NavLink } from "react-router-dom"
import Sidebar from "../../02-organisms/Sidebar/Sidebar"
import Author from "../../05-types/Author"
import Network from "../../05-types/Network"
import Page from "../../05-types/Page"

interface HomeProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
}

const NotFound: React.FC<HomeProps> = ({authorData, networksData, pagesData}) => (
    <div className="page__notfound">
        <Sidebar authorData={authorData} networksData={networksData} pagesData={pagesData} />
        <main className="notfound__content">
            <section>
                <h3>Désolé, cette page n'existe pas !</h3>
                <NavLink exact to="/" >
                    <i className="fas fa-home"><span>Accueil</span></i>
                </NavLink>
            </section>
        </main>
    </div>
)

export default NotFound