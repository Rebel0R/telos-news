import "./Banner.css";
import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <img src="./images/not-img1.png" alt="Imagem Banner da Noticia" />
      <p className="banner-title">Burnout: você sabe lidar com o esgotamento profissional?</p>
      <div className="details-news">
        <p className="author">Autor: Fulano de Tal</p>
        <p className="date">28/04/2023</p>
      </div>
    </div>
  );
}
