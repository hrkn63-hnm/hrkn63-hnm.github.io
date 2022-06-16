import { Button } from "react-bootstrap";

export default function Department(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>
        {props.sentence}
        <Button variant="outline-secondary">
          <a href={props.detail}>詳しく</a>
        </Button>
      </p>
    </div>
  );
}
