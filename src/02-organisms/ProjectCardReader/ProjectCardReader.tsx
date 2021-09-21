import { useState } from 'react'
import ProjectCard from '../../01-molecules/ProjectCard/ProjectCard';
import ProjectModal from '../../01-molecules/ProjectModal/ProjectModal';
import Project from "../../05-types/Project"

const ProjectCardReader:React.FC<{project: Project}> = ({project}) => {
    const [isInfoShowed, setIsInfoShowed] = useState(false);
    const toggle = () => setIsInfoShowed(!isInfoShowed)

    return (
        <>
            <ProjectCard project={project} toggle={toggle} />
            {
                isInfoShowed && <ProjectModal project={project} toggle={toggle} />
            }
        </>
    )
}

export default ProjectCardReader