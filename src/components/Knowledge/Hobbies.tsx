import BlockTitle from "../../atoms/texts/BlockTitle/BlockTitle"
import hobbiesData from "../../data/hobbiesData"

const Hobbies = () => (
    <div className="knowledge__hobbies">
        <BlockTitle title="Intérêts" />
        <ul>
            {hobbiesData.map(hobby => (
                <li className="hobby" key={hobby.name}>
                    <i className={hobby.icon} />
                    <span>{hobby.name}</span>
                </li>
            ))}
        </ul>
    </div>
)

export default Hobbies