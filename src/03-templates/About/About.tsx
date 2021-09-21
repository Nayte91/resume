import ContactMe from "../../02-organisms/ContactMe/ContactMe"
import Sidebar from "../../02-organisms/Sidebar/Sidebar"
import Author from "../../05-types/Author"
import Network from "../../05-types/Network"
import Page from "../../05-types/Page"
import AnimatedNetworks from "../../02-organisms/AnimatedNetworks/AnimatedNetworks"
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