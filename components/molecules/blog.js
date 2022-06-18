import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export default function Blog(props) {
  return (
    <div>
      <Card style={{ width: "rem" }}>
        <Card.Header>一覧</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <a href="">今まで生きてきておそらく一番嬉しかったことが文化祭で起きた話</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="">ふざけて書いた童話が全国最優秀賞になってしまった話</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href=""></a>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
