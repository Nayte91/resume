import PDFButton from "../../00-atoms/buttons/PDFButton/PDFButton"
import PresentationSubtitle from "../../00-atoms/texts/PresentationSubtitle/PresentationSubtitle"
import PresentationTitle from "../../00-atoms/texts/PresentationTitle/PresentationTitle"
import Presentation from "../../05-types/Presentation"
import "./_Splash.scss"

const Splash:React.FC<{presentationData: Presentation}> = ({presentationData}) => (
    <section className="home__splash">
        <PresentationTitle title={presentationData.title} />
        <PresentationSubtitle subtitle={presentationData.subtitle} />
        <PDFButton pdflink={presentationData.pdfLink} />
    </section>
)

export default Splash