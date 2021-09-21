import { NavLink } from "react-router-dom"
import NavigationIcon from "../../atoms/images/NavigationIcon/NavigationIcon"
import NavigationPageName from "../../atoms/texts/NavigationPageName/NavigationPageName"
import Page from "../../types/Page"
import "./NavigationLink.scss"

interface NavigationLinkProps {
    pageData: Page;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({pageData}) => (
    <NavLink
        exact to={pageData.uri}
        className="navigation__link"
        activeClassName="navigation__link--active"
    >
        <NavigationIcon iconClass={pageData.icon} />
        <NavigationPageName pageName={pageData.name} />
    </NavLink>
)

export default NavigationLink