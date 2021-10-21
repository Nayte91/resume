import About from "../03-templates/About/About"

const AboutPage = () => {
    let authorData = require('../06-data/authorData.json')
    let pagesData = require('../06-data/pagesData.json')
    let networksData = require('../06-data/networksData.json')
    
    return <About authorData={authorData} networksData={networksData} pagesData={pagesData} />
}

export default AboutPage