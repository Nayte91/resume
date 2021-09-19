import Experiences from "../../components/Knowledge/Experiences"
import Miscellaneous from "../../components/Knowledge/Miscellaneous"
import Hobbies from "../../components/Knowledge/Hobbies"
import ProgressBar from "../../components/Knowledge/ProgressBar"
import { frameworks, languages } from "../../data/technologiesData"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"

interface KnowledgeProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
}

const Knowledge:React.FC<KnowledgeProps> = ({authorData, networksData, pagesData}) => (
    <div className="page__knowledge">
        <Sidebar authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
        <main className="knowledge__content">
            <ProgressBar
                key="languages"
                skills={ languages }
                title="languages"
            />
            <ProgressBar
                key="frameworks"
                skills={ frameworks }
                title="frameworks"
            />
            <Experiences />
            <Miscellaneous />
            <Hobbies />
        </main>
    </div>
)

export default Knowledge