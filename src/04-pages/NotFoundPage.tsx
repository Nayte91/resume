import NotFound from "../03-templates/NotFound/NotFound"

const NotFoundPage = () => {
    let authorData = require('../06-data/authorData.json')
    let pagesData = require('../06-data/pagesData.json')
    let networksData = require('../06-data/networksData.json')

    return (
        <NotFound 
            authorData={authorData}
            networksData={networksData}
            pagesData={pagesData}
        />
    )
}

export default NotFoundPage