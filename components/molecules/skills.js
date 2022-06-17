import Skillsheet from "../atoms/skillsheet";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Skills(props) {
  return (
    <div>
      <div className="container">
        <Row>
          <Col className="col-4">
            <Skillsheet
              img="https://cdn.discordapp.com/attachments/757627473427955867/987357593112559716/code_FILL0_wght400_GRAD0_opsz48.png"
              skillname="プログラミング"
              text="約半年前からプログラミングを始めて、今はHTML,CSS,JS,React,Node.js,React...などが専門です。そのうちAIやロボットに手を出したい。"
            />
          </Col>
          <Col className="col-4">
            <Skillsheet
              img="https://cdn.discordapp.com/attachments/757627473427955867/987358259532955728/2_2.png"
              skillname="バドミントン"
              text="小学校からバドミントンをやっていて、何度か県大会に出たことがある。怪我により引退した。"
            />
          </Col>
          <Col className="col-4">
            <Skillsheet
              img="https://cdn.discordapp.com/attachments/757627473427955867/987357528318955520/lightbulb_FILL0_wght400_GRAD0_opsz48.png"
              skillname="アイデアを出すこと"
              text="日頃から面白い、やってみたいと思ったことをメモするので、結構奇抜なアイデアが出たりする。"
            />
          </Col>
          <Col className="col-4">
            <Skillsheet
              img="https://cdn.discordapp.com/attachments/757627473427955867/987357450904674394/record_voice_over_FILL0_wght400_GRAD0_opsz48.png"
              skillname="人前で話すこと"
              text="急に人前で話せと言われても脳死でそれっぽく話すことができる。特にプレゼンが好きで得意。"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}
