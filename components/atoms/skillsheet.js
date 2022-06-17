export default function Skillsheet(props) {
  return (
    <div>
      <div>
        <img src={props.img} className="p-2 m-2"></img>
      </div>
      <div>
        <h4 className="">{props.skillname}</h4>
        <p className="p-1">{props.text}</p>
      </div>
    </div>
  );
}
