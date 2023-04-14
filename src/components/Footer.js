import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebookSquare} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
