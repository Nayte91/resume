import Sidebar from "../../02-organisms/Sidebar/Sidebar"
import Splash from "../../02-organisms/Splash/Splash"
import Presentation from "../../05-types/Presentation"
import Network from "../../05-types/Network"
import Author from "../../05-types/Author"
import Page from "../../05-types/Page"
import "./Home.scss"

interface HomeProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
    presentationData: Presentation;
}

const Home: React.FC<HomeProps> = ({authorData, networksData, pagesData, presentationData}) => (
    <div className="page__home">
        <Sidebar authorData={authorData} networksData={networksData} pagesData={pagesData} />
        <main className="home__content">
            <Splash presentationData={presentationData} />
        </main>
    </div>
)

export default Home