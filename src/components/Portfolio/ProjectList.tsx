import { Component, ChangeEvent } from 'react';
import { portfolioData } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";

class ProjectList extends Component<any, any> {
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: "PHP"},
            {id: 2, value: "Symfony"},
            {id: 3, value: "Javascript"},
            {id: 4, value: "React"}
        ],
        selectedRadio: "PHP"
    };

    handleRadio = (event: ChangeEvent<HTMLInputElement>): void => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio});
        console.log()
    };

    render() {
        let {projects, radios, selectedRadio} = this.state;

        return (
            <main className="portfolio__content">
                <nav className="portfolio__selector">
                    {
                        radios.map( radio => {
                            return (
                                <div className={`selector__button${radio.value === selectedRadio ? " selector__button--selected": "" }`} key={ radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </div>
                            );
                        })
                    }
                </nav>

                <div className="portfolio__projects">
                    {
                        projects
                            .filter(project => project.languages.includes(selectedRadio))
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
            </main>
        );
    }
}

export default ProjectList;