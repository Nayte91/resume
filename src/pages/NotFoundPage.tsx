import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"
import NotFound from "../templates/NotFound/NotFound"

const NotFoundPage = () => (
    <NotFound 
        authorData={authorData}
        networksData={networksData}
        pagesData={pagesData}
    />
)

export default NotFoundPage