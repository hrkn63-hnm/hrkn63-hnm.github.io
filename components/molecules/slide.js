import { Carousel } from "react-bootstrap";

export default function Slide(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/757627473427955867/987336157757063188/IMG_7818.png"
            alt="First slide"
          />
          <Carousel.Caption className="bg-primary bg-opacity-50">
            <h3>文化祭にてレビューサイトを公開</h3>
            <p>文化祭２日目スタート時のサイトの様子</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/757627473427955867/987335818966355998/IMG_7816.png"
            alt="Second slide"
          />

          <Carousel.Caption className="bg-primary bg-opacity-50">
            <h3>初めて自分で作ったサイトを公開した時の様子</h3>
            <p>無料サーバーとhtmlが僕の命綱だった時代</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.discordapp.com/attachments/757627473427955867/987336014022475816/IMG_7817.png"
            alt="Third slide"
          />

          <Carousel.Caption className="bg-primary bg-opacity-50">
            <h3>初めてのPC</h3>
            <p>いい値段したけどMac買ってよかった</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
