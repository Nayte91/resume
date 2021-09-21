import BlockTitle from "../../00-atoms/texts/BlockTitle/BlockTitle"

const Experiences:React.FC<{experiences:any[]}> = ({experiences}) => (
    <div className="knowledge__experiences">
        <BlockTitle title="Experiences" />
        { experiences.map((experience, index) => (
            <div className={`exp-${index+1}`} key={ experience.title }>
                <h4>{ experience.title }</h4>
                <h5>{ experience.date }</h5>
                <p>{ experience.description }</p>
            </div>
        ))}
    </div>
)

export default Experiences