import Link from "next/link";
import Layout from "../components/layout";
import Department from "../components/organisms/department";
import Works from "../components/molecules/works";
import Slide from "../components/molecules/slide";
import { Button } from "react-bootstrap";

const Index = () => {
  return (
    <div class="container">
      <Layout
        header="Hariken"
        headline="Hi! I'm Hariken!"
        title="Hariken"
      ></Layout>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
      <div>
        <Slide />
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department
            title="About Me"
            sentence="はりけんという名前で活動しています。茨城県に住む高校2年生やってます。"
          />
          <a href="#" class="btn btn-primary" value="primary">
            詳しく
          </a>
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Skills" />
          <a href="#" class="btn btn-primary" value="primary">
            詳しく
          </a>
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Works" />
          <div>
            <Works
              img1="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
              text1="テスト中"
              date1="6月15日"
              img2="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
              text2="テスト中"
              date2="6月15日"
              img3="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
              text3="テスト中"
              date3="6月15日"
            />
          </div>
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Blog" />
        </div>
      </div>
    </div>
  );
};

export default Index;
