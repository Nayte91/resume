import "./_SkillItem.scss"

const SkillItem:React.FC<{skill:string}> = ({skill}) => (
    <li className="skill__item">
        <i className="fas fa-check-square"><span>{skill}</span></i>
    </li>
)

export default SkillItem