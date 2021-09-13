import presentationData from "../../data/presentationData"

const Presentation = () => {
    return (
        <article className="home__splash">
            <h1>{ presentationData.title }</h1>
            <h2>{ presentationData.subtitle }</h2>
            <div className="button__pdf">
                <a href={ presentationData.pdfLink }>Téléchargez mon CV</a>
            </div>
        </article>
    )
}

export default Presentation