import ProjectsViewer from "../../organisms/ProjectsViewer/ProjectsViewer"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"
import Project from "../../types/Project"
import "./Portfolio.scss"

interface PortfolioProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
    technologies: string[];
    projects: Project[];
}

const Portfolio:React.FC<PortfolioProps> = ({authorData, networksData, pagesData, technologies, projects}) => (
    <div className="page__portfolio">
        <Sidebar authorData={authorData} networksData={networksData} pagesData={pagesData} />
        <main className="portfolio__content">
            <ProjectsViewer technologies={technologies} projects={projects} />
        </main>
    </div>
)

export default Portfolio