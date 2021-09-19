import {CopyToClipboard} from "react-copy-to-clipboard"
import ContactIcon from "../../atoms/images/ContactIcon/ContactIcon"
import BlockTitle from "../../atoms/texts/BlockTitle/BlockTitle"
import Author from "../../types/Author"
import "./ContactMe.scss"

const ContactMe:React.FC<{authorData:Author}> = ({authorData}) => (
    <section className="about__contact">
        <div className="about__biography">
            <BlockTitle title="Biographie" />
            <p>{ authorData.biography }</p>
        </div>
        <div className="about__links">
            <BlockTitle title="Contactez-moi" />
            <ul>
                <li>
                    <ContactIcon iconClass="fas fa-map-marked-alt" />
                    <a href="https://goo.gl/maps/4opcwbxwkchQLJJq9">
                        <span className="clickInput">{ authorData.city }</span>
                    </a>
                </li>
                <li>
                    <ContactIcon iconClass="fas fa-mobile-alt" />
                    <CopyToClipboard text={ authorData.phone }>
                        <span className="clickInput" onClick={() => alert('téléphone copié !')}>{ authorData.phone }</span>
                    </CopyToClipboard>
                </li>
                <li>
                    <ContactIcon iconClass="far fa-envelope" />
                    <CopyToClipboard text={ authorData.email }>
                        <span className="clickInput" onClick={() => alert('email copié !')}>{ authorData.email }</span>
                    </CopyToClipboard>
                </li>
            </ul>
        </div>
    </section>
)

export default ContactMe