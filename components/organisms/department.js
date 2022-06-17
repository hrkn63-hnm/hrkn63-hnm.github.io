export default function Department(props) {
  return (
    <div>
      <h4 className="mb-3 mt-3 pb-3 pt-3 display-5">{props.title}</h4>
      <p>{props.paragraph}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
    </div>
  );
}
