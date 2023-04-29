import "./Banner.css";
import React from "react";

export default function Banner() {
  return (
    <div className="banner">
      <img src="./images/not-img1.png" alt="Imagem Banner da Noticia" />
      <p className="banner-title">Burnout: você sabe lidar com o esgotamento profissional?</p>
      <p className="author">Autor: Fulano de Tal</p>
    </div>
  );
}
