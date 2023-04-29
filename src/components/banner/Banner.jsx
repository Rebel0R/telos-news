import "./Banner.css";
import React from "react";

export default function Banner(props) {
  const news = props.news;
  return (
    <div className="banner">
      <img src={news.image} alt="Imagem Banner da Noticia" />
      <p className="banner-title">{news.title}</p>
      <div className="details-news">
        <p className="author">Autor: {news.author}</p>
        <p className="date">{news.date}</p>
      </div>
    </div>
  );
}
