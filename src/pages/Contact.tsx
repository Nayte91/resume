import Navigation from "../components/Navigation"
import {CopyToClipboard} from "react-copy-to-clipboard"
import networksData from "../data/networksData"
import contactData from "../data/contactData"

const Contact = () => {
    return (
        <div className="page__contact">
            <Navigation />
            <main className="contact__content">
                <div className="header"> </div>
                <div className="contact__box">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <a href="https://goo.gl/maps/4opcwbxwkchQLJJq9">
                                <span className="clickInput">{ contactData.city }</span>
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt" />
                            <CopyToClipboard text={ contactData.phone }>
                                <span className="clickInput" onClick={() => alert('téléphone copié !')}>
                                    { contactData.phone }
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope" />
                            <CopyToClipboard text={ contactData.email }>
                                <span className="clickInput" onClick={() => alert('email copié !')}>
                                    { contactData.email }
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="contact__social-networks">
                    {
                        networksData.map( network => {
                            return (
                                <div className="social-network__card">
                                    <a href={ network.url } key={ network.name }>
                                        <h4>{ network.name }</h4>
                                        <i className={ network.icon } />
                                    </a>
                                </div>
                            );
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default Contact