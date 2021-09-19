import "./NavigationPageName.scss"

const NavigationPageName: React.FC<{pageName: string}> = ({pageName}) => <span className="navigation__pageName">{pageName}</span>

export default NavigationPageName