import PDFButton from "../../atoms/buttons/PDFButton/PDFButton"
import PresentationSubtitle from "../../atoms/texts/PresentationSubtitle/PresentationSubtitle"
import PresentationTitle from "../../atoms/texts/PresentationTitle/PresentationTitle"
import Presentation from "../../types/Presentation"
import "./Splash.scss"

const Splash:React.FC<{presentationData: Presentation}> = ({presentationData}) => (
    <section className="home__splash">
        <PresentationTitle title={presentationData.title} />
        <PresentationSubtitle subtitle={presentationData.subtitle} />
        <PDFButton pdflink={presentationData.pdfLink} />
    </section>
)

export default Splash