import Knowledge from "../templates/Knowledge/Knowledge"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"

const KnowledgePage = () => (
    <Knowledge authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
)

export default KnowledgePage