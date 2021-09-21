import Knowledge from "../templates/Knowledge/Knowledge"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"
import {frameworks, languages} from "../data/technologiesData"
import {miscellaneousFirst, miscellaneousSecond} from "../data/miscellaneousData"
import hobbiesData from "../data/hobbiesData"
import experiencesData from "../data/experiencesData"

const KnowledgePage = () => (
    <Knowledge 
        authorData={authorData}
        networksData={networksData}
        pagesData={pagesData}
        languages={languages}
        frameworks={frameworks}
        miscellaneousFirst={miscellaneousFirst}
        miscellaneousSecond={miscellaneousSecond}
        hobbies={hobbiesData}
        experiences={experiencesData}
    />
)

export default KnowledgePage