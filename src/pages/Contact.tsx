import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt" />
                            <CopyToClipboard text="0651046106">
                                <span
                                    className="clickInput"
                                    onClick={() => alert('téléphone copié !')}
                                >
                                    06.51.04.61.06
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope" />
                            <CopyToClipboard text="robic.julien@free.Fr">
                                <span
                                    className="clickInput"
                                    onClick={() => alert('email copié !')}
                                >
                                    robic.julien@free.fr
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div id="social-network">
                    <ul>
                        <a href="https://www.linkedin.com/in/julien-robic-b6a895178/">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://github.com/Nayte91">
                            <h4>Github</h4>
                            <i className="fab fa-github" />
                        </a>
                        <a href="https://codepen.io/nayte91">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen" />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;