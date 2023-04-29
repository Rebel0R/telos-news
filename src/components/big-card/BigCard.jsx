import React from "react";
import "./BigCard.css";
import { Link } from "react-router-dom";

export default function BigCard(props) {
  const singleNews = props.singleNews;
  return (
    <div className="big-card">
      <div className="side-left">
        <p className="big-card-title">{singleNews.subject}</p>
        <Link to={`/news/${singleNews.id}`}>
          <button className="big-card-button" typeof="button">
            ler agora
          </button>
        </Link>
      </div>
      <img src={singleNews.image} alt="Imagem do card"></img>
    </div>
  );
}
