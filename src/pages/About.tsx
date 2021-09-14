import Biography from "../components/About/Biography"
import Contact from "../components/About/Contact"
import SocialNetworks from "../components/About/SocialNetworks"
import Navigation from "../components/Navigation"

const About = () => { return (
    <div className="page__about">
        <Navigation />
        <main className="about__content">
            <Biography />
            <Contact />
            <SocialNetworks />
        </main>
    </div>
)}

export default About