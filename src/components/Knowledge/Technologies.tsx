import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Technologies extends Component {
    state = {
        languages: [
            {id: 1, value: "PHP", xp: 2},
            {id: 2, value: "CSS", xp: 1.5},
            {id: 3, value: "VBA", xp: 0.5},
            {id: 4, value: "JS", xp: 1}
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp: 2},
            {id: 2, value: "Bootstrap", xp: 2},
            {id: 3, value: "React", xp: 0.5}
        ]
    }

    render() {
        let { languages, frameworks } = this.state;

        return (
            <div id="technologies">
                <ProgressBar
                    skills={languages}
                    title="Langages"
                    divId="languages"
                />
                <ProgressBar
                    skills={frameworks}
                    title="Frameworks"
                    divId="frameworks"
                />
            </div>
        );
    }
}

export default Technologies;