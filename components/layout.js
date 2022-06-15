import Head from "next/head";
import Header from "./header";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Header header={props.header} />
      <div className="container">
        <h3 className="display-1 text-center ">{props.title}</h3>
        {props.children}
      </div>
      <footer footer="copyright hariken" />
    </div>
  );
}