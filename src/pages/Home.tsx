import Presentation from "../components/Home/Presentation"
import Navigation from "../components/Navigation"

const Home = () => { return (
    <div className="page__home">
        <Navigation />
        <main className="home__content">
            <Presentation />
        </main>
    </div>
)}

export default Home