import offers from "../data/offers";
import Box from "./Box";

const Offers = () => {
  return (
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
  );
};

export default Offers;
