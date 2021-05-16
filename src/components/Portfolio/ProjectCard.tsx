import React, {Component} from 'react';
import {Project} from "../../types/Project";

interface Props {
    project: Project;
}

class ProjectCard extends Component<Props> {
    state = {
        showInfo: false
    }

    handleInfo = () => this.setState({showInfo: !this.state.showInfo})

    render() {
        let {name, languagesIcons, source, info, picture} = this.props.project;
        return (
            <div className="project">
                <div className="project-icons">
                    {languagesIcons.map(icon => <i className={icon} key={icon}/>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt={name} onClick={this.handleInfo}/>
                <span className="project-info" onClick={this.handleInfo}>
                <i className="fas fa-plus-circle" />
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfo">
                            <div className="info-content">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div>
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>
                                    Retourner sur la page
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ProjectCard;