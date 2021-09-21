import Experiences from "../../organisms/Experiences/Experiences"
import ProgressBlock from "../../organisms/ProgressBlock/ProgressBlock"
import MiscellaneousBlock from "../../organisms/MiscellaneousBlock/MiscellaneousBlock"
import Hobbies from "../../organisms/Hobbies/Hobbies"
import Sidebar from "../../organisms/Sidebar/Sidebar"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"
import "./Knowledge.scss"

interface KnowledgeProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
    languages: any;
    frameworks: any;
    miscellaneousFirst: any;
    miscellaneousSecond: any;
    hobbies: any[];
    experiences: any[];
}

const Knowledge:React.FC<KnowledgeProps> = ({
    authorData, 
    networksData, 
    pagesData, 
    languages, 
    frameworks, 
    miscellaneousFirst, 
    miscellaneousSecond,
    hobbies,
    experiences
}) => (
    <div className="page__knowledge">
        <Sidebar authorData={authorData} networksData={networksData} pagesData={pagesData} />
        <main className="knowledge__content">
            <ProgressBlock
                key="languages"
                skills={languages}
                title="languages"
            />
            <ProgressBlock
                key="frameworks"
                skills={frameworks}
                title="frameworks"
            />
            <Experiences experiences={experiences} />
            <MiscellaneousBlock miscDataFirst={miscellaneousFirst} miscDataSecond={miscellaneousSecond} />
            <Hobbies hobbies={hobbies} />
        </main>
    </div>
)

export default Knowledge