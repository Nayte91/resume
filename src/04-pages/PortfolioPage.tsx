import Portfolio from "../03-templates/Portfolio/Portfolio"

const PortfolioPage = () => {
    let authorData = require('../06-data/authorData.json')
    let pagesData = require('../06-data/pagesData.json')
    let networksData = require('../06-data/networksData.json')
    let portfolioData = require('../06-data/portfolioData.json')
    let {listedtechnologies} = require('../06-data/technologiesData.json')

    return <Portfolio authorData={authorData} networksData={networksData} pagesData={pagesData} technologies={listedtechnologies} projects={portfolioData} />
}

export default PortfolioPage