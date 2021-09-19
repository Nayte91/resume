import ProjectList from "../../components/Portfolio/ProjectList"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"

interface PortfolioProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
}

const Portfolio:React.FC<PortfolioProps> = ({authorData, networksData, pagesData}) => (
    <div className="page__portfolio">
        <Sidebar authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
        <main className="portfolio__content">
            <ProjectList />
        </main>
    </div>
)

export default Portfolio