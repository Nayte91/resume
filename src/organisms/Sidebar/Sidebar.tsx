import NavigationFooter from "../../molecules/NavigationFooter/NavigationFooter"
import NavigationHeader from "../../molecules/NavigationHeader/NavigationHeader"
import NavigationLink from "../../molecules/NavigationLink/NavigationLink"
import Author from "../../types/Author"
import Network from "../../types/Network"
import Page from "../../types/Page"
import "./Sidebar.scss"

interface SidebarProps {
    authorData: Author;
    networksData: Network[];
    pagesData: Page[];
}

const Sidebar:React.FC<SidebarProps> = ({authorData, networksData, pagesData}) => (
    <aside className="sidebar">
        <NavigationHeader fileName={authorData.picture} firstName={authorData.firstName} lastName={authorData.lastName} />
        <nav className="navigation__menu">
            {pagesData.map(pageData => <NavigationLink key={pageData.name} pageData={pageData} />)}
        </nav>
        <NavigationFooter networksData={networksData} firstName={authorData.firstName} lastName={authorData.lastName} nickName={authorData.nickName} />
    </aside>
)

export default Sidebar