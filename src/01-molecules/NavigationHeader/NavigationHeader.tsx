import IdentityName from "../../00-atoms/texts/IdentityName/IdentityName";
import IdentityPicture from "../../00-atoms/images/IdentityPicture/IdentityPicture";
import "./_NavigationHeader.scss"

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