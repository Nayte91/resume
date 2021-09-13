import { useState } from 'react'
import portfolioData from "../../data/portfolioData"
import ProjectCard from "./ProjectCard"

const ProjectList = () => {
    const projects = portfolioData;
    const [selectedTechnology, setTechnology] = useState('PHP');
    const technologies = ['PHP', 'Symfony', 'Javascript', 'React'];

    return (
        <>
            <nav className="portfolio__selector">
                {
                    technologies.map( technology => {
                        return (
                            <div 
                                className={`selector__button${technology === selectedTechnology ? " selector__button--selected": "" }`} 
                                key={ technology } 
                                onClick={e => setTechnology(e.currentTarget.innerText)}
                            >
                                <button>{ technology }</button>
                            </div>
                        );
                    })
                }
            </nav>

            <div className="portfolio__projects">
                {
                    projects
                        .filter(project => project.languages.includes(selectedTechnology))
                        .map( project => {
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        );
                    })
                }
            </div>
        </>
    )
}

export default ProjectList