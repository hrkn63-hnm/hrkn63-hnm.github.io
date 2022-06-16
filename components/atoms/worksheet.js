export default function Worksheet(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button type="button" className="btn btn-primary">
            <a href={props.repositoriy} className="btn btn-primary ">
              リポジトリはこちら
            </a>
          </button>
          <p className="card-text">
            <small className="text-muted">{props.date}</small>
          </p>
        </div>
      </div>
    </div>
  );
}