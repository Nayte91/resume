import Bubble from "../../atoms/buttons/Bubble/Bubble";
import Signature from "../../atoms/texts/Signature/Signature";
import Network from "../../types/Network";
import "./NavigationFooter.scss";

interface NavigationFooterProps {
    networksData: Network[];
    firstName: string;
    lastName: string;
    nickName: string;
}

const NavigationFooter:React.FC<NavigationFooterProps> = ({networksData, firstName, lastName, nickName}) => (
    <>
        <ul className="networks__bubbles">
            { networksData.map( network => <Bubble key={ network.name } network={ network } /> )}
        </ul>
        <Signature firstName={firstName} lastName={lastName} nickName={nickName} />
    </>
)

export default NavigationFooter