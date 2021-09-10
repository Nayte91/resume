import { Component } from 'react';
import { Project } from "../../types/Project";

interface Props {
    project: Project;
}

class ProjectCard extends Component<Props, any> {
    state = {
        showInfo: false
    }

    handleInfo = () => this.setState({showInfo: !this.state.showInfo})

    render() {
        let {name, languagesIcons, source, url, info, picture} = this.props.project;
        return (
            <article className="project">
                <h3 className="project__title">{ name }</h3>
                <hr className="project__break" />
                <div className="project__icons">{ languagesIcons.map(icon => <i className={icon} key={icon} />) }</div>
                <img className="project__picture" src={ picture } alt={ name } onClick={this.handleInfo} />

                {
                    this.state.showInfo && (
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
                                <div className="button return" onClick={this.handleInfo}>
                                    Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }
            </article>
        );
    }
}

export default ProjectCard;