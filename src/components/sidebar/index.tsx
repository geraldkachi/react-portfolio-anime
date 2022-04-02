import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogosSide from "../../assets/images/logo-s.png"
import LogosSubtitle from "../../assets/images/logo_sub.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faSkype, faUber, faYoutube } from "@fortawesome/free-brands-svg-icons"


const SideBar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogosSide} alt="logoS" />
                <img className="sub-logo" src={LogosSubtitle} alt="logotitle" />
            </Link>
            <nav>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUber} color="#4d4d4e" />
                </NavLink>

                <NavLink className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>

            <ul>
        <li>
          <a href="https://www.linkedin.com/in/fitzgerald-kachi/"target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://github.com/geraldkachi"target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="skype:live:fitzgeraldkachi" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
        </div>
    )
}

export default SideBar