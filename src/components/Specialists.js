import specialists from "../data/specialists";
import Person from "./Person";

const Specialists = () => {
  return (
    <section className="specialist" id="two">
      <div className="container">
        <h2 className="spec-title">Nasi specjaliści</h2>

        {specialists.map((specialist, index) => {
          return (
            <Person
              title={specialist.title}
              text={specialist.text}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Specialists;
