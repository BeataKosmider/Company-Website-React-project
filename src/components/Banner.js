const Banner = () => {
  return (
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
  );
};

export default Banner;
