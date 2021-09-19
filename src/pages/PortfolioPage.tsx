import Portfolio from "../templates/Portfolio/Portfolio"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"

const PortfolioPage = () => (
    <Portfolio authorData={ authorData } networksData={ networksData } pagesData={ pagesData } />
)

export default PortfolioPage