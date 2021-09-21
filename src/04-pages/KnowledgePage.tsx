import Knowledge from "../03-templates/Knowledge/Knowledge"
import authorData from "../06-data/authorData"
import networksData from "../06-data/networksData"
import pagesData from "../06-data/pagesData"
import {frameworks, languages} from "../06-data/technologiesData"
import {miscellaneousFirst, miscellaneousSecond} from "../06-data/miscellaneousData"
import hobbiesData from "../06-data/hobbiesData"
import experiencesData from "../06-data/experiencesData"

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