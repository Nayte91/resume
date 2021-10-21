import Knowledge from "../03-templates/Knowledge/Knowledge"

const KnowledgePage = () => {
    let authorData = require('../06-data/authorData.json')
    let pagesData = require('../06-data/pagesData.json')
    let networksData = require('../06-data/networksData.json')
    let experiencesData = require('../06-data/experiencesData.json')
    let hobbiesData = require('../06-data/hobbiesData.json')
    let {first, second} = require('../06-data/miscellaneousData.json')
    let {frameworks, languages} = require('../06-data/technologiesData.json')

    return (
        <Knowledge 
            authorData={authorData}
            networksData={networksData}
            pagesData={pagesData}
            languages={languages}
            frameworks={frameworks}
            miscellaneousFirst={first}
            miscellaneousSecond={second}
            hobbies={hobbiesData}
            experiences={experiencesData}
        />
    )
}

export default KnowledgePage