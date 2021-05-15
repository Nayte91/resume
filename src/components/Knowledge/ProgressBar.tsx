import React from 'react';
import {Skill} from "../../types/Skill";

interface Props {
    skills?: Array<Skill>;
    title: string;
}

const ProgressBar: React.FC<Props> = ({
                                          skills = [],
                                          title
}) => {

    return (
        <div>
            <h3>{title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>6 mois</span>
                <span>1 an</span>
            </div>

            <div>
                {
                    skills.map(item => {
                        let xpYears = 2;
                        let progressBar = item.xp / xpYears * 100 + '%';

                        return (
                            <div key={item.id} className="skill-list">
                                <li>{item.value}</li>
                                <div className="progress-bar" style={{width:progressBar}}></div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;