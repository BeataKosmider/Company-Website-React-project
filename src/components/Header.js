const Header = () => {
  return (
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
  );
};

export default Header;
