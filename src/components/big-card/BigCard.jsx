import React from "react";
import "./BigCard.css";

export default function BigCard(props) {
  const singleNews = props.singleNews;
  return (
    <div className="big-card">
      <div className="side-left">
        <p className="big-card-title">{singleNews.subject}</p>
        <button className="big-card-button" typeof="button">
          ler agora
        </button>
      </div>
      <img src={singleNews.image} alt="Imagem do card"></img>
    </div>
  );
}
