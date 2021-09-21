import { useState } from 'react'
import Project from "../../types/Project"

const ProjectCard:React.FC<{project: Project}> = ({project}) => {
    const [isInfoShowed, setIsInfoShowed] = useState(false);
    const toggle = () => setIsInfoShowed(!isInfoShowed)

    let {name, languagesIcons, source, url, info, picture} = project;

    return (
        <article className="project">
            <h3 className="project__title">{ name }</h3>
            <hr className="project__break" />
            <div className="project__icons">{ languagesIcons.map(icon => <i className={icon} key={icon} />) }</div>
            <img className="project__picture" src={ picture } alt={ name } onClick={toggle} />

            {
                isInfoShowed && (
                    <div className="showInfo">
                        <div className="info-content">
                            <div className="head">
                                <div>
                                    <a href={ url } rel="noopener noreferrer" className="button" target="_blank">Vers le site</a>
                                </div>
                                <h2>{ name }</h2>
                                <div>
                                    <a href={ source } rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                </div>
                            </div>

                            <p className="text">{ info }</p>
                            <div className="button return" onClick={toggle}>
                                Retourner sur la page
                            </div>
                        </div>
                    </div>
                )
            }
        </article>
    )
}

export default ProjectCard