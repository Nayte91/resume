import About from "../templates/About/About"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"

const AboutPage = () => (
    <About authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
)

export default AboutPage