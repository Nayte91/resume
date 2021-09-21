import { NavLink } from "react-router-dom"
import NavigationIcon from "../../00-atoms/images/NavigationIcon/NavigationIcon"
import NavigationPageName from "../../00-atoms/texts/NavigationPageName/NavigationPageName"
import Page from "../../05-types/Page"
import "./_NavigationLink.scss"

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