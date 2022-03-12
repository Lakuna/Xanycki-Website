import styles from "../styles/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faPaintbrush, faHouse, faIdCard, faBan } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles["navbar"]}>
      <ul>
        <li><a href="https://twitter.com/xanycki"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
        <li><a href="https://www.twitch.tv/xanycki"><FontAwesomeIcon icon={faTwitch} /> Twitch</a></li>
        <li><a href="https://artfight.net/~Xanycki"><FontAwesomeIcon icon={faPaintbrush} /> Art Fight</a></li>
        <li><a href="https://toyhou.se/Xanycki"><FontAwesomeIcon icon={faHouse} /> TOYHOU.SE</a></li>
        <li><a href="https://xanycki.carrd.co/"><FontAwesomeIcon icon={faIdCard} /> Carrd</a></li>
        <li><a href="https://twitter.com/XanyckiNSFW"><FontAwesomeIcon icon={faBan} /> NSFW</a></li>
      </ul>
    </nav>
  );
}
