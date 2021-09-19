import "./BlockTitle.scss"

const BlockTitle: React.FC<{title:string}> = ({title}) => <h2 className="block__title">{title}</h2>

export default BlockTitle