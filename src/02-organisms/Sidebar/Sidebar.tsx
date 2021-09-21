import NavigationFooter from "../../01-molecules/NavigationFooter/NavigationFooter"
import NavigationHeader from "../../01-molecules/NavigationHeader/NavigationHeader"
import NavigationLink from "../../01-molecules/NavigationLink/NavigationLink"
import Author from "../../05-types/Author"
import Network from "../../05-types/Network"
import Page from "../../05-types/Page"
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
        <menu>
            {pagesData.map(pageData => (
                <li key={pageData.name}>
                    <NavigationLink pageData={pageData} />
                </li>
            ))}
        </menu>
        <footer className="navigation__footer">
            <NavigationFooter networksData={networksData} firstName={authorData.firstName} lastName={authorData.lastName} nickName={authorData.nickName} />
        </footer>
    </aside>
)

export default Sidebar