import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BodyText from "../../components/body-text/BodyText";
import news from "../../data/news-data";
import { useParams } from "react-router-dom";

export default function News() {
  const { id } = useParams();
  const currentNews = news.find((result) => result.id === id);
  console.log("News:" + news);
  console.log("ID:" + id);

  return (
    <div className="noticia">
      <Header />
      <div className="content-noticia">
        <Banner news={currentNews} />
        <BodyText news={currentNews} />
      </div>
    </div>
  );
}
