export default function Department(props) {
  return (
    <div>
      <h4 className="mb-3 mt-3 pb-3 pt-3 display-4">{props.title}</h4>
      <p>{props.paragraph}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
      <h5 className="mb-4 mt-5 display-5">{props.profile}</h5>
      <p>{props.paragraph4}</p>
      <h5 className="mb-4 mt-5 display-5">{props.namereason}</h5>
      <p>{props.paragraph5}</p>
      <p>{props.paragraph6}</p>
    </div>
  );
}
