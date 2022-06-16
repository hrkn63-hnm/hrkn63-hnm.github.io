export default function Slide(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        crossOrigin="anonymous"
      ></link>
      <link
        rel="stylesheet"
        href="../../styles/carousel.css"
        crossOrigin="anonymous"
      ></link>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="スライド 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="スライド 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="スライド 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect fill="#777" width="100%" height="100%" />
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>見出しの例。</h1>
                <p>
                  カルーセルの1番目のスライドの代表的なプレースホルダーコンテンツ。
                </p>
                <p>
                  <a className="btn btn-primary" href="#">
                    本日登録
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect fill="#777" width="100%" height="100%" />
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>別の見出しの例。</h1>
                <p>
                  カルーセルの2番目のスライドの代表的なプレースホルダーコンテンツ。
                </p>
                <p>
                  <a className="btn btn-primary" href="#">
                    もっと学ぼう
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect fill="#777" width="100%" height="100%" />
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>もう1つ良い指標。</h1>
                <p>
                  カルーセルの3番目のスライドの代表的なプレースホルダーコンテンツ。
                </p>
                <p>
                  <a className="btn btn-primary" href="#">
                    ギャラリーを閲覧
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">前へ</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">次へ</span>
        </button>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
