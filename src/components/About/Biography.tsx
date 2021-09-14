import biographyData from "../../data/biographyData"

const Biography = () => { return (
    <section className="about__biography">
        <h1>{ biographyData.title }</h1>
        <p>{ biographyData.text }</p>
    </section>
)}

export default Biography