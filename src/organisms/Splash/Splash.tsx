import PDFButton from "../../atoms/buttons/PDFButton/PDFButton"
import PresentationSubtitle from "../../atoms/texts/PresentationSubtitle/PresentationSubtitle"
import PresentationTitle from "../../atoms/texts/PresentationTitle/PresentationTitle"
import Presentation from "../../types/Presentation"
import "./Splash.scss"

interface SplashProps {
    presentationData: Presentation;
}

const Splash:React.FC<SplashProps> = ({presentationData}) => (
    <article className="home__splash">
        <PresentationTitle title={ presentationData.title } />
        <PresentationSubtitle subtitle={ presentationData.subtitle } />
        <PDFButton pdflink={ presentationData.pdfLink } />
    </article>
)

export default Splash