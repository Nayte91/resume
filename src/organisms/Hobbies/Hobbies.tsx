import React from "react"
import BlockTitle from "../../atoms/texts/BlockTitle/BlockTitle"
import "./Hobbies.scss"

const Hobbies:React.FC<{hobbies:any[]}> = ({hobbies}) => (
    <div className="knowledge__hobbies">
        <BlockTitle title="Intérêts" />
        <ul>
            {hobbies.map(hobby => (
                <li className="hobby" key={hobby.name}>
                    <i className={hobby.icon} />
                    <span>{hobby.name}</span>
                </li>
            ))}
        </ul>
    </div>
)

export default Hobbies