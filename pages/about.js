import Layout from "../components/layout";
import Department from "../components/organisms/department";
import Footer from "../components/organisms/footer";
import Link from "next/link";

export default () => (
  <div>
    <div className="container">
      <Layout title="Hariken/about"></Layout>
      <div className="mt-5 pt-5 mb-5 pb-5">
        <Department
          namejp="はりけん"
          nameen="HARIKEN++"
          title="About Me"
          paragraph="はりけん++という名前で活動しています。高校2年生やってます。"
          paragraph2="やりたいことが多すぎて人生が足りないと感じるほどいろんなことに興味があります。"
          paragraph3="ドラえもんとサマーウォーズが好き。"
          profile="はりけん++のProfile"
          paragraph4="2005年6月3日生まれ。茨城在住。幼少期は兵庫県宝塚市で過ごす。その後茨城県守谷市を経て今に至る。"
          paragraph5=""
          namereason="名前の由来"
          paragraph6="僕の名前は自分のニックネームに++をつけた形になっています。"
          paragraph7="これはC++をやっているという意味ではなく、JSで言うインクリメント演算子という1を足し続けるやつです。コツコツ自分が成長し続けるようにと言う意味を込めました。"
          recent="最近"
          paragraph8="学校に寄り添ったSNSの開発をしている。なんとしても完成させなければならない。"
          paragraph9="生徒会選挙に立候補しようとしている。"
          paragraph10="基本情報技術者試験を受けようとしている。試験の方式が変わって秋に受けるか春以降に受けるか迷い中。"
        />
        <Link href="/">
          <a className="btn btn-primary" value="primary">
            戻る
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  </div>
);
