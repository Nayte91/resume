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
        <header className="navigation__header">
            <NavigationHeader fileName={authorData.picture} firstName={authorData.firstName} lastName={authorData.lastName} />
        </header>
        <nav className="navigation__menu">
            {pagesData.map(pageData => (
                <li className="navigation__item">
                    <NavigationLink key={pageData.name} pageData={pageData} />
                </li>
            ))}
        </nav>
        <footer className="navigation__footer">
            <NavigationFooter networksData={networksData} firstName={authorData.firstName} lastName={authorData.lastName} nickName={authorData.nickName} />
        </footer>
    </aside>
)

export default Sidebar