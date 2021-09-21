import Project from "../../05-types/Project"
import "./_ProjectModal.scss"

interface ProjectModalProps {
    project: Project;
    toggle: () => void;
}

const ProjectModal:React.FC<ProjectModalProps> = ({project, toggle}) => (
    <div className="project__modal">
        <div className="modal__content">
            <header>
                <button className="site">
                    <a 
                        href={project.url} 
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Vers le site
                    </a>
                </button>

                <h2>{project.name}</h2>

                <button className="source">
                    <a 
                        href={project.source}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Code source
                    </a>
                </button>
            </header>

            <p>{project.info}</p>

            <button className="return" onClick={toggle}>Retourner sur la page</button>
        </div>
    </div>
)

export default ProjectModal