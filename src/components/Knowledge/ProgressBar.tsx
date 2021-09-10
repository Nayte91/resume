import React from 'react';
import { Skill } from "../../types/Skill";

interface Props {
    skills: Array<Skill>;
    title: string;
    divId: string;
}

const ProgressBar: React.FC<Props> = ({ skills = [], title, divId}) => {
    return (
        <div id={divId}>
            <h3>{title}</h3>
            <div className="years">
                <span>Temps</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    skills.map(item => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={ item.id } className="skill">
                                <li>{ item.value }</li>
                                <div
                                    className="progress-bar"
                                    style={{width:progressBar}}
                                 />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;