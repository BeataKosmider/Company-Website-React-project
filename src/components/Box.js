const Box = ({ text, isNew }) => {
  return (
    <div className="item">
      {text} {isNew ? "(nowość)" : ""}
      {isNew ? <div className="point"></div> : null}
    </div>
  );
};

export default Box;
