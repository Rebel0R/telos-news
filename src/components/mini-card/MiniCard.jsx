import "./MiniCard.css";

function MiniCard() {
  return (
    <div className="minicard-box">
      <img src="./images/img-minicard1.png" alt="Imagem da mini noticia"></img>
      <p className="minicard-title">Por que trabalhar com propósito?</p>
      <button className="minicard-button">Ler Agora</button>
    </div>
  );
}

export default MiniCard;
