import Home from "../templates/Home/Home"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"
import presentationData from "../data/presentationData"

const HomePage = () => (
    <Home authorData={authorData} networksData={networksData} pagesData={pagesData} presentationData={presentationData} />
)

export default HomePage