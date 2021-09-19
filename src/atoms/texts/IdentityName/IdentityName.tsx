import "./IdentityName.scss";

interface IdentityNameProps {
    firstName: string;
    lastName: string;
}

const IdentityName:React.FC<IdentityNameProps> = ({firstName, lastName}) => <h1 className="name">{firstName} {lastName}</h1>

export default IdentityName