import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub,faKaggle,faLinkedinIn,faInstagram,faFacebookF} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
    render() {
        return(
            <div class='social'>
                <a href="https://www.github.com" target='_blank'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                <a href="https://www.kaggle.com" target='_blank'><FontAwesomeIcon icon={faKaggle}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com" target='_blank'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
                <a href="https://www.facebook.com" target='_blank'><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com" target='_blank'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </div>

        )
    }
}

export default Social