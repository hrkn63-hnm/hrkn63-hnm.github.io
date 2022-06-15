import Link from "next/link";
import Layout from "../components/layout";
import Department from "../components/department"
import Division from "../components/details/division";

const Index = () => {
  return (
    <div>
      <Layout header="Hariken" title="Hi! I'm Hariken!"></Layout>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
      <div>
        <Department
          title="About Me"
          sentence="はりけんという名前で活動しています。茨城県に住む高校2年生やってます。"
        />
        <Department title="Skills" />
        <Department title="Works" />
        <div>
          <Division
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
        <Department title="Articles" />
      </div>
    </div>
  );
};

export default Index;
