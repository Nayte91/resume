import Sidebar from "../../organisms/Sidebar/Sidebar"
import Splash from "../../organisms/Splash/Splash"
import Presentation from "../../types/Presentation"
import Network from "../../types/Network"
import Author from "../../types/Author"
import Page from "../../types/Page"
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