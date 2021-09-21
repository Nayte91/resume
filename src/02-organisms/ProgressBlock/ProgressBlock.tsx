import React from 'react'
import BlockTitle from '../../00-atoms/texts/BlockTitle/BlockTitle';
import ProgressBar from '../../01-molecules/ProgressBar/ProgressBar';
import { Skill } from "../../05-types/Skill"
import "./ProgressBlock.scss"

interface Props {
    skills: Skill[];
    title: string;
}

const ProgressBlock: React.FC<Props> = ({skills, title}) => (
    <section className={`progress__block knowledge__${title}`}>
        <BlockTitle title={title} />
        <dl className="progress_range">
            <dt>Temps</dt>
            <dd>1 an</dd>
            <dd>2 ans</dd>
        </dl>

        {skills.map( item => <ProgressBar key={item.id} item={item} />)}
    </section>
)

export default ProgressBlock