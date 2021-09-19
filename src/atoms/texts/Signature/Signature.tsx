import "./Signature.scss";

interface SignatureProps {
    firstName: string;
    nickName: string;
    lastName: string;
}

const Signature:React.FC<SignatureProps> = ({firstName, nickName, lastName}) => <p className="signature">{firstName} "{nickName}" {lastName} ® {new Date().getFullYear()}</p>

export default Signature