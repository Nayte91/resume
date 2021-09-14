import experiencesData from "../../data/experiencesData"

const Experiences = () => {
    return (
        <div id="experiences">
            <h3>Experiences</h3>
            { experiencesData.map((experience, index) => { return (
                <div className={`exp-${index+1}`} key={ experience.title }>
                    <h4>{ experience.title }</h4>
                    <h5>{ experience.date }</h5>
                    <p>{ experience.description }</p>
                </div>
            )})}
        </div>
    )
}

export default Experiences