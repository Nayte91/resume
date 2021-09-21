import BlockTitle from '../../00-atoms/texts/BlockTitle/BlockTitle';
import Project from "../../05-types/Project"
import "./ProjectCard.scss"

interface ProjectCardProps {
    project:Project;
    toggle: () => void;
}

const ProjectCard:React.FC<ProjectCardProps> = ({project, toggle}) => (
    <article className="project">
        <BlockTitle title={project.name} />
        <div className="project__icons">{project.languagesIcons.map(icon => <i className={icon} key={icon} />)}</div>
        <img src={project.picture} alt={project.name} onClick={toggle} />
    </article>
)

export default ProjectCard