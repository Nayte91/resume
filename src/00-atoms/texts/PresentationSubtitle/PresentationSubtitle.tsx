import "./_PresentationSubtitle.scss"

const PresentationSubtitle: React.FC<{subtitle: string}> = ({subtitle}) => <h2 className="presentation_subtitle">{ subtitle }</h2>

export default PresentationSubtitle