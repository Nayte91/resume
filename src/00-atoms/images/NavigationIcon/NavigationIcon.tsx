import "./_NavigationIcon.scss"

const NavigationIcon: React.FC<{iconClass: string}> = ({iconClass}) => <i className={`navigation__icon ${iconClass}`} />

export default NavigationIcon