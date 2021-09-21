import Portfolio from "../03-templates/Portfolio/Portfolio"
import authorData from "../06-data/authorData"
import networksData from "../06-data/networksData"
import pagesData from "../06-data/pagesData"
import { listedtechnologies } from "../06-data/technologiesData"
import portfolioData from "../06-data/portfolioData"

const PortfolioPage = () => (
    <Portfolio authorData={ authorData } networksData={ networksData } pagesData={ pagesData } technologies={listedtechnologies} projects={portfolioData} />
)

export default PortfolioPage