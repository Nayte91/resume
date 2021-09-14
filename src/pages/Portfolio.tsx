import Navigation from "../components/Navigation"
import ProjectList from "../components/Portfolio/ProjectList"

const Portfolio = () => { return (
    <div className="page__portfolio">
        <Navigation />
        <main className="portfolio__content">
            <ProjectList />
        </main>
    </div>
)}

export default Portfolio