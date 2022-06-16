import Worksheet from '../atoms/worksheet'

export default function Works(props) {
  return (
    <div>
      <div className="card-group">
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
          title="テスト"
          text="テスト中ですので悪しからず"
          date="6月16日"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
          title="テスト"
          text="テスト中ですので悪しからず"
          date="6月16日"
        />
        <Worksheet
          img="https://cdn.discordapp.com/attachments/757627473427955867/986602391631720468/154483cc28fd7c4e.png"
          title="テスト"
          text="テスト中ですので悪しからず"
          date="6月16日"
        />
      </div>
    </div>
  );
}
