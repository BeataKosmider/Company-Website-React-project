import "./reset.css";
import "./App.css";
import Box from "./components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import offers from "./data/offers";

const App = () => {
  return (
    <>
      <header>
        <nav className="menu">
          <div className="container">
            <div className="only-mobile">nazwa firmy</div>
            <ul>
              <li>
                <a href="#one" className="left">
                  moja firma
                </a>
              </li>
              <li className="spacer" aria-hidden="true"></li>
              <li>
                <a href="#two" className="right">
                  o nas
                </a>
              </li>
              <li>
                <a href="#three" className="right">
                  oferta
                </a>
              </li>
              <li>
                <a href="#kontakt" id="inactive">
                  kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="banner" id="one">
          <div className="overlay">
            <div className="container center">
              <h2>Nasza firma oferuje najwyższej jakości produkty.</h2>
              <div className="slogan">Nie wierz nam na słowo - sprawdź</div>
              <input
                type="button"
                onClick="location.href='#three';"
                value="oferta"
                className="button"
              />
            </div>
          </div>
        </section>
        <section className="specialist" id="two">
          <div className="container">
            <h2 className="spec-title">Nasi specjaliści</h2>
            <div className="person">
              <div className="photo photo1"></div>
              <div className="text text1">
                <h3>Imię Nazwisko [ dział ]</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vel massa et lacus egestas cursus a non magna. Fusce
                  scelerisque blandit nunc, id malesuada ex lobortis a. Integer
                  felis nisi, tempor elementum lorem in, varius pellentesque
                  ligula. Duis efficitur lacinia enim, non tincidunt libero
                  ultrices in.
                </p>
              </div>
            </div>
            <div className="person">
              <div className="photo photo2"></div>
              <div className="text text2">
                <h3>Imię Nazwisko [ dział ]</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vel massa et lacus egestas cursus a non magna. Fusce
                  scelerisque blandit nunc, id malesuada ex lobortis a. Integer
                  felis nisi, tempor elementum lorem in, varius pellentesque
                  ligula. Duis efficitur lacinia enim, non tincidunt libero
                  ultrices in.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="offer" id="three">
          <div className="container">
            <h2 className="offer-title">Czym zajmuje się nasza firma?</h2>
            <div className="grid-container">
              {offers.map((offer) => {
                return <Box text={offer.text} isNew={offer.isNew} />;
              })}
            </div>
          </div>
        </section>
      </main>
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
    </>
  );
};

export default App;
