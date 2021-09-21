import { useState } from 'react'
import BlockTitle from '../../atoms/texts/BlockTitle/BlockTitle';
import Project from "../../types/Project"
import "./ProjectCard.scss"

const ProjectCard:React.FC<{project:Project}> = ({project}) => {
    const [isInfoShowed, setIsInfoShowed] = useState(false);
    const toggle = () => setIsInfoShowed(!isInfoShowed)

    return (
        <article className="project">
            <BlockTitle title={project.name} />
            <div className="project__icons">{project.languagesIcons.map(icon => <i className={icon} key={icon} />)}</div>
            <img src={project.picture} alt={project.name} onClick={toggle} />
        </article>
    )
}

export default ProjectCard