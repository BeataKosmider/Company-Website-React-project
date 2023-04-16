const Person = ({ title, text }) => {
  return (
    <div className="person">
      <div className="photo"></div>
      <div className="text">
        <h3> {title} </h3>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Person;
