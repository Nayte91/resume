import IdentityName from "../../atoms/texts/IdentityName/IdentityName";
import IdentityPicture from "../../atoms/images/IdentityPicture/IdentityPicture";
import "./NavigationHeader.scss"

interface NavigationHeaderProps {
    fileName: string;
    firstName: string;
    lastName: string;
}

const NavigationHeader:React.FC<NavigationHeaderProps> = ({fileName, firstName, lastName}) => (
    <div className="identity__content">
        <IdentityPicture fileName={fileName} />
        <IdentityName firstName={firstName} lastName={lastName} />
    </div>
)

export default NavigationHeader