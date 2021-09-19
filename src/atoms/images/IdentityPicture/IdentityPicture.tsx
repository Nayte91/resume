import "./IdentityPicture.scss";

const IdentityPicture:React.FC<{fileName: string}> = ({fileName}) => <img className="identity__picture" src={`./media/${fileName}`} alt="Identity" />

export default IdentityPicture