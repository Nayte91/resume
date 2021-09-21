import BlockTitle from "../../atoms/texts/BlockTitle/BlockTitle"
import experiencesData from "../../data/experiencesData"

const Experiences = () => (
    <div className="knowledge__experiences">
        <BlockTitle title="Experiences" />
        { experiencesData.map((experience, index) => (
            <div className={`exp-${index+1}`} key={ experience.title }>
                <h4>{ experience.title }</h4>
                <h5>{ experience.date }</h5>
                <p>{ experience.description }</p>
            </div>
        ))}
    </div>
)

export default Experiences