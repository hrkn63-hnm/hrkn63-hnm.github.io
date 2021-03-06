import Worksheet from "../atoms/worksheet";

export default function Works(props) {
  return (
    <div>
      <div className="card-group">
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987342630377623592/IMG_7819.jpg"
          title="匿名掲示板"
          text="Node.jsとSQLite3で作成。Node.js超入門[第3版] 掌田津耶乃(著)を参考にした。"
          date="2022年6月17日 完成品"
          button1="リポジトリはこちら"
          link1="https://github.com/hrkn63-hnm/ex-gen-app"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987345254497779732/IMG_7823.jpg"
          title="メモアプリ"
          text="Reactで作成。React.js&Next.js超入門[第2版] 掌田津耶乃(著)を参考にした。"
          date="2022年6月17日 作成中"
          button1="リポジトリはこちら"
          link1="https://github.com/hrkn63-hnm/react_app"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987383424551636992/2022-05-18_16.44.171.jpg"
          title="オンライン生徒手帳"
          text="UIに問題がありすぎる一品。初めて共同開発した。"
          date="2022年6月17日 作成中"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987382866663071764/IMG_7825.jpg"
          title="交通安全動画"
          text="教員に頼まれて友人と共同制作したもの。ネタに走った。"
          date="2022年6月17日 完成品"
          button2="みてみる"
          link2="https://www.youtube.com/watch?v=HEFO6Xoehis"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/987575019393654784/IMG_7828.jpg"
          title="あなたのいいところ診断"
          text="N予備校の講座で作ったもの。Twitterによくあるやつ。"
          date="2022年6月18日 完成品"
          button1="リポジトリはこちら"
          link1="https://github.com/hrkn63-hnm/assessment"
          button2="みてみる"
          link2="https://hrkn63-hnm.github.io/assessment/b"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/994855253407187024/2022-07-08_15.31.28.jpg"
          title="今日のニャンコ"
          text="サバイバルTypeScriptで作った。TSデビュー作"
          date="2022年7月8日 完成品"
          button1="リポジトリはこちら"
          link1="https://github.com/hrkn63-hnm/random-cat11"
          button2="みてみる"
          link2="https://random-cat11.vercel.app/"
        />
      </div>
    </div>
  );
}
