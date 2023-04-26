const Person = ({ title, text, image }) => {
  return (
    <div className="person">
      <div className="photo" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="text">
        <h3> {title} </h3>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Person;
