import {CopyToClipboard} from "react-copy-to-clipboard"
import ContactIcon from "../../00-atoms/images/ContactIcon/ContactIcon"
import BlockTitle from "../../00-atoms/texts/BlockTitle/BlockTitle"
import Author from "../../05-types/Author"
import "./_ContactMe.scss"

const ContactMe:React.FC<{authorData:Author}> = ({authorData}) => (
    <section className="contact">
        <div className="contact__biography">
            <BlockTitle title="biographie" />
            <p>{authorData.biography}</p>
        </div>
        <div className="contact__links">
            <BlockTitle title="Contactez-moi" />
            <ul>
                <li>
                    <ContactIcon iconClass="fas fa-map-marked-alt" />
                    <a href="https://goo.gl/maps/4opcwbxwkchQLJJq9">
                        <span className="clickInput">{authorData.city}</span>
                    </a>
                </li>
                <li>
                    <ContactIcon iconClass="fas fa-mobile-alt" />
                    <CopyToClipboard text={authorData.phone}>
                        <span className="clickInput" onClick={() => alert('téléphone copié !')}>{authorData.phone}</span>
                    </CopyToClipboard>
                </li>
                <li>
                    <ContactIcon iconClass="far fa-envelope" />
                    <CopyToClipboard text={authorData.email}>
                        <span className="clickInput" onClick={() => alert('email copié !')}>{authorData.email}</span>
                    </CopyToClipboard>
                </li>
            </ul>
        </div>
    </section>
)

export default ContactMe