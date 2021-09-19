import ContactMe from "../../organisms/ContactMe/ContactMe"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"
import AnimatedNetworks from "../../organisms/AnimatedNetworks/AnimatedNetworks"
import "./About.scss"

interface AboutProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
}

const About:React.FC<AboutProps> = ({authorData, networksData, pagesData}) => (
    <div className="page__about">
        <Sidebar authorData={authorData} networksData={networksData} pagesData={pagesData} />
        <main className="about__content">
            <ContactMe authorData={authorData} />
            <AnimatedNetworks networks={networksData} />
        </main>
    </div>
)

export default About