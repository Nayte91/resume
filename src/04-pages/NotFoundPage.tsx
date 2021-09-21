import authorData from "../06-data/authorData"
import networksData from "../06-data/networksData"
import pagesData from "../06-data/pagesData"
import NotFound from "../03-templates/NotFound/NotFound"

const NotFoundPage = () => (
    <NotFound 
        authorData={authorData}
        networksData={networksData}
        pagesData={pagesData}
    />
)

export default NotFoundPage