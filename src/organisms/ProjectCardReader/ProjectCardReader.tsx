import { useState } from 'react'
import BlockTitle from '../../atoms/texts/BlockTitle/BlockTitle';
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
import Project from "../../types/Project"

const ProjectCardReader:React.FC<{project: Project}> = ({project}) => {
    const [isInfoShowed, setIsInfoShowed] = useState(false);
    const toggle = () => setIsInfoShowed(!isInfoShowed)

    return (
        <article className="project">
            {/* <h3 className="project__title">{ project.name }</h3> */}
            <BlockTitle title={project.name} />
            {/* <hr className="project__break" /> */}
            <div className="project__icons">{ project.languagesIcons.map(icon => <i className={icon} key={icon} />) }</div>
            <img className="project__picture" src={ project.picture } alt={ project.name } onClick={toggle} />

            {
                isInfoShowed && <ProjectModal project={project} toggle={toggle} />
            }
        </article>
    )
}

export default ProjectCardReader