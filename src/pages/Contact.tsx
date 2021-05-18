import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {networksData} from "../data/networksData";
import {contactData} from "../data/contactData";

const Contact = () => {
    return (
        <div id="contact">
            <Navigation />
            <div id="contact-content">
                <div className="header"> </div>
                <div id="contact-box">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marked-alt" />
                            <span>{contactData.city}</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt" />
                            <CopyToClipboard text={contactData.phone}>
                                <span
                                    className="clickInput"
                                    onClick={() => alert('téléphone copié !')}
                                >
                                    {contactData.phone}
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope" />
                            <CopyToClipboard text={contactData.email}>
                                <span
                                    className="clickInput"
                                    onClick={() => alert('email copié !')}
                                >
                                    {contactData.email}
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div id="social-network">
                    <ul>
                        {networksData.map(network => {
                            return (
                                <a href={network.url} key={network.name}>
                                    <h4>{network.name}</h4>
                                    <i className={network.icon} />
                                </a>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;