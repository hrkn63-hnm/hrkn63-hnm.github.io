import Link from "next/link";
import Layout from "../components/layout";
import Department from "../components/organisms/department";
import Works from "../components/molecules/works";
import Slide from "../components/molecules/slide";
import { Button } from "react-bootstrap";
import Skills from "../components/molecules/skills";
import Blog from '../components/molecules/blog'
import Footer from '../components/organisms/footer'

const Index = () => {
  return (
    <div className="container" >
      <Layout
        title="Hariken"
      ></Layout>
      <div>
        <Slide />
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department
            title="About Me"
            paragraph="はりけん++という名前で活動しています。高校2年生やってます。"
            paragraph2="やりたいことが多すぎて人生が足りないと感じるほどいろんなことに興味があります。"
            paragraph3="ドラえもんとサマーウォーズが好き。"
          />
          <Link href="/about">
            <a className="btn btn-primary" value="primary">
              詳しく
            </a>
          </Link>
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Skills" />
          <Skills />
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Works" />
          <div>
            <Works />
          </div>
        </div>
        <div className="mt-5 pt-5 mb-5 pb-5">
          <Department title="Blog" />
          <Blog />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
