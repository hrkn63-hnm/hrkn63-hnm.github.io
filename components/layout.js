import Head from "next/head";
import Header from "./organisms/header";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anoymous"
        ></link>
      </Head>
      <Header header={props.header} />
      <div className="container">
        {props.children}
      </div>
      <footer footer="copyright hariken" />
    </div>
  );
}
