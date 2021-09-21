import ProjectsViewer from "../../02-organisms/ProjectsViewer/ProjectsViewer"
import Sidebar from "../../02-organisms/Sidebar/Sidebar"
import Author from "../../05-types/Author"
import Network from "../../05-types/Network"
import Page from "../../05-types/Page"
import Project from "../../05-types/Project"
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