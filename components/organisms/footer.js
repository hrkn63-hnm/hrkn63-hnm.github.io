import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Header(props) {
  return (
    <div>
      <Container fluid className="">
        <Row>
          <Col className=" p-3 ">HARIKEN++</Col>
          <Col className="p-2 text-right">
            <a href="https://www.youtube.com/" className="p-1">
              <img src="https://cdn.discordapp.com/attachments/757627473427955867/986991308432343090/1491580651-yumminkysocialmedia28_83061.png"></img>
            </a>
            <a href="https://twitter.com/hrkn63_hnm" className="p-2">
              <img src="https://cdn.discordapp.com/attachments/757627473427955867/986979416171221082/twitter32icon.png"></img>
            </a>
            <a href="https://github.com/hrkn63-hnm" className="p-1">
              <img src="https://cdn.discordapp.com/attachments/757627473427955867/986978353695318036/GitHub-Mark-32px.png"></img>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
