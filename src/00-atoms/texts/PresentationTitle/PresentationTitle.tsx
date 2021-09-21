import "./_PresentationTitle.scss"

const PresentationTitle: React.FC<{title:string}> = ({title}) => <h1 className="presentation__title">{ title }</h1>

export default PresentationTitle