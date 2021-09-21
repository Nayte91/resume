import { useState } from "react"
import TechnologySelector from "../../molecules/TechnologySelector/TechnologySelector";
import Project from "../../types/Project";
import ProjectCardReader from "../ProjectCardReader/ProjectCardReader";
import "./ProjectsViewer.scss"

interface ProjectsViewerProps {
    projects: Project[];
    technologies: string[];
}

const ProjectsViewer:React.FC<ProjectsViewerProps> = ({projects, technologies}) => {
    const [selectedTechnology, setTechnology] = useState('PHP');

    return (
        <>
            <TechnologySelector technologies={technologies} selectedTechnology={selectedTechnology} setTechnology={setTechnology} />

            <div className="portfolio__projects">
                { projects
                    .filter(project => project.languages.includes(selectedTechnology))
                    .map(project => <ProjectCardReader key={project.id} project={project} />)
                }
            </div>
        </>
    )
}

export default ProjectsViewer