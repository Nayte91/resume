import ExperiencesBlock from "../../02-organisms/ExperiencesBlock/ExperiencesBlock"
import ProgressBlock from "../../02-organisms/ProgressBlock/ProgressBlock"
import MiscellaneousBlock from "../../02-organisms/MiscellaneousBlock/MiscellaneousBlock"
import Sidebar from "../../02-organisms/Sidebar/Sidebar"
import Author from "../../05-types/Author"
import Network from "../../05-types/Network"
import Page from "../../05-types/Page"
import "./Knowledge.scss"
import HobbiesBlock from "../../02-organisms/HobbiesBlock/HobbiesBlock"

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
            <ExperiencesBlock experiences={experiences} />
            <MiscellaneousBlock miscDataFirst={miscellaneousFirst} miscDataSecond={miscellaneousSecond} />
            <HobbiesBlock hobbies={hobbies} />
        </main>
    </div>
)

export default Knowledge