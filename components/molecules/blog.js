import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Link from "next/link";


export default function Blog() {
  return (
    <div>
      <Card style={{ width: "rem" }}>
        <Card.Header>一覧</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Link href="/blog/1">
              <a>[1]今まで生きてきておそらく一番嬉しかったことが文化祭で起きた話</a>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link href="/">
              <a>[2]ふざけて書いた童話が全国最優秀賞になってしまった話</a>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
