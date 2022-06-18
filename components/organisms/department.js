export default function Department(props) {
  return (
    <div>
      <h3 className="mt-3 pt-3 mb-0">{props.namejp}</h3>
      <h1 className="mb-5 pb-5 display-1">{props.nameen}</h1>
      <h4 className="mb-3 mt-3 pb-3 pt-3 display-4">{props.title}</h4>
      <p>{props.paragraph}</p>
      <p>{props.paragraph2}</p>
      <p>{props.paragraph3}</p>
      <h5 className="mb-4 mt-5 display-5">{props.profile}</h5>
      <p>{props.paragraph4}</p>
      <p>{props.paragraph5}</p>
      <h5 className="mb-4 mt-5 display-5">{props.namereason}</h5>
      <p>{props.paragraph6}</p>
      <p>{props.paragraph7}</p>
      <h5 className="mb-4 mt-5 display-5">{props.recent}</h5>
      <p>{props.paragraph8}</p>
      <p>{props.paragraph9}</p>
      <p>{props.paragraph10}</p>
    </div>
  );
}
