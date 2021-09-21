import Portfolio from "../templates/Portfolio/Portfolio"
import authorData from "../data/authorData"
import networksData from "../data/networksData"
import pagesData from "../data/pagesData"
import { listedtechnologies } from "../data/technologiesData"
import portfolioData from "../data/portfolioData"

const PortfolioPage = () => (
    <Portfolio authorData={ authorData } networksData={ networksData } pagesData={ pagesData } technologies={listedtechnologies} projects={portfolioData} />
)

export default PortfolioPage