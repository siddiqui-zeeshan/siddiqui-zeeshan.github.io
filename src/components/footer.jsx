import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="footer-row-1">
                    <a
                        href="https://www.linkedin.com/in/zeeshan98/"
                        target="_blank"
                        className="fa fa-linkedin"
                        rel="noreferrer"
                        id="side-icon"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/siddiqui-zeeshan/"
                        target="_blank"
                        className="fa fa-github"
                        rel="noreferrer"
                        id="side-icon"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="mailto:siddiqui.zeeshan1998@gmail.com"
                        className="fa fa-envelope"
                        id="side-icon"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                        href="https://www.facebook.com/zeeshansiddiqui.1998/"
                        target="_blank"
                        className="fa fa-facebook"
                        rel="noreferrer"
                        id="side-icon"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.instagram.com/zeeshan.1902/"
                        target="_blank"
                        className="fa fa-instagram"
                        rel="noreferrer"
                        id="side-icon"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <div className="footer-row-2">
                    <a href="https://github.com/siddiqui-zeeshan/siddiqui-zeeshan.github.io" id="footer-github">Designed &amp; Built by Zeeshan Siddiqui</a>
                </div>
            </footer>
        );
    }
}

export default Footer;