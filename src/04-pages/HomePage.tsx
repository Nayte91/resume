import Home from "../03-templates/Home/Home"
import authorData from "../06-data/authorData"
import networksData from "../06-data/networksData"
import pagesData from "../06-data/pagesData"
import presentationData from "../06-data/presentationData"

const HomePage = () => (
    <Home 
        authorData={authorData}
        networksData={networksData}
        pagesData={pagesData}
        presentationData={presentationData}
    />
)

export default HomePage