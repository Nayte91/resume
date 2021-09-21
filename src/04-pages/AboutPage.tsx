import About from "../03-templates/About/About"
import authorData from "../06-data/authorData"
import networksData from "../06-data/networksData"
import pagesData from "../06-data/pagesData"

const AboutPage = () => (
    <About authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
)

export default AboutPage