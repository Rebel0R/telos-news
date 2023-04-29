import React from "react";
import "./BigCard.css";

export default function BigCard() {
  return (
    <div className="big-card">
      <div className="side-left">
        <p className="big-card-title">Negócios</p>
        <button className="big-card-button" typeof="button">
          ler agora
        </button>
      </div>
      <img src="./images/img-bigcard1.png" alt="Imagem do card"></img>
    </div>
  );
}
