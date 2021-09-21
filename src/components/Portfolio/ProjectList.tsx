import { useState } from "react"
import portfolioData from "../../data/portfolioData"
import PortfolioSelector from "../../molecules/PortfolioSelector/PortfolioSelector";
import ProjectCardReader from "../../organisms/ProjectCardReader/ProjectCardReader";

const ProjectList = () => {
    const projects = portfolioData;
    const [selectedTechnology, setTechnology] = useState('PHP');

    return (
        <>
            <PortfolioSelector />

            <div className="portfolio__projects">
                { projects
                    .filter( project => project.languages.includes(selectedTechnology) )
                    .map( project => <ProjectCardReader key={project.id} project={project} /> )
                }
            </div>
        </>
    )
}

export default ProjectList