import Home from "../03-templates/Home/Home"

const HomePage = () => {
    let authorData = require('../06-data/authorData.json')
    let pagesData = require('../06-data/pagesData.json')
    let networksData = require('../06-data/networksData.json')
    let presentationData = require('../06-data/presentationData.json')

    return (
        <Home 
            authorData={authorData}
            networksData={networksData}
            pagesData={pagesData}
            presentationData={presentationData}
        />
    )
}

export default HomePage