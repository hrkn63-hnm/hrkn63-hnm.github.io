import Layout from "../components/layout";
import Department from "../components/organisms/department";

export default () => (
  <div className="container">
    <Layout title="Hariken/about"></Layout>
    <div className="mt-5 pt-5 mb-5 pb-5">
      <Department
        title="About Me"
        paragraph="はりけん++という名前で活動しています。茨城県に住む高校2年生やってます。"
        paragraph2="やりたいことが多すぎて人生が足りないと感じるほどいろんなことに興味があります。"
        paragraph3="ドラえもんとサマーウォーズが好き。"
        profile="はりけん++のProfile"
        paragraph4="2005年6月3日生まれ。茨城在住。幼少期は兵庫県宝塚市で過ごす。その後茨城県守谷市を経て今に至る。"
        namereason="名前の由来"
        paragraph5="僕の名前は自分のニックネームに++をつけた形になっています。"
        paragraph6="これはC++をやっているという意味ではなく、JSで言うインクリメント演算子という1を足し続けるやつです。コツコツ自分が成長し続けるようにと言う意味を込めました。"
      />
    </div>
  </div>
);
