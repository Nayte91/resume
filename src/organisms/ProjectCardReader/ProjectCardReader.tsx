import { useState } from 'react'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard';
import ProjectModal from '../../molecules/ProjectModal/ProjectModal';
import Project from "../../types/Project"

const ProjectCardReader:React.FC<{project: Project}> = ({project}) => {
    const [isInfoShowed, setIsInfoShowed] = useState(false);
    const toggle = () => setIsInfoShowed(!isInfoShowed)

    return (
        <>
            <ProjectCard project={project} />
            {
                isInfoShowed && <ProjectModal project={project} toggle={toggle} />
            }
        </>
    )
}

export default ProjectCardReader