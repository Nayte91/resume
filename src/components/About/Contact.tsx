import {CopyToClipboard} from "react-copy-to-clipboard"
import contactData from "../../data/contactData"

const Contact = () => { return (
    <section className="about__contact">
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
    </section>
)}

export default Contact