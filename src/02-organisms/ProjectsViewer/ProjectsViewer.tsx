import { useState } from "react"
import TechnologySelector from "../../01-molecules/TechnologySelector/TechnologySelector";
import Project from "../../05-types/Project";
import ProjectCardReader from "../ProjectCardReader/ProjectCardReader";
import "./_ProjectsViewer.scss"

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