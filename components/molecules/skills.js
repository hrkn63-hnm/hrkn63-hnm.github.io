export default function Skills(props) {
  return (
    <div>
      <div>
        <img>{props.image1}</img>
        <h5>{props.skill1}</h5>
        <p>{props.text1}</p>
      </div>
      <div>
        <img>{props.image2}</img>
        <h5>{props.skill2}</h5>
        <p>{props.text2}</p>
      </div>
      <div>
        <img>{props.image3}</img>
        <h5>{props.skill3}</h5>
        <p>{props.text3}</p>
      </div>
    </div>
  );
}
