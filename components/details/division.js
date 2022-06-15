export default function Division(props) {
  return (
    <div>
      <div class="card-group">
        <div class="card">
          <img src={props.img1} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">{props.title1}</h5>
            <p class="card-text">{props.text1}</p>
            <button type="button" class="btn btn-primary">
              <a href={props.repositoriy1} class="btn btn-primary ">
                リポジトリはこちら
              </a>
            </button>
            <p class="card-text">
              <small class="text-muted">{props.date1}</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={props.img2} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">{props.title2}</h5>
            <p class="card-text">{props.text2}</p>
            <button type="button" class="btn btn-primary">
              <a href={props.repositoriy2} class="btn btn-primary ">
                リポジトリはこちら
              </a>
            </button>
            <p class="card-text">
              <small class="text-muted">{props.date2}</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={props.img3} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">{props.title3}</h5>
            <p class="card-text">{props.text3}</p>
            <button type="button" class="btn btn-primary">
              <a href={props.repositoriy3} class="btn btn-primary ">
                リポジトリはこちら
              </a>
            </button>
            <p class="card-text">
              <small class="text-muted">{props.date3}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
