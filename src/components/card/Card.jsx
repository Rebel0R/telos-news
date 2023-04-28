import "./Card.css";

function Card() {
  return (
    <div className="card-box">
      <img src="./images/img-card1.png" alt="Imagem do Card"></img>
      <div className="card-texts">
        <p className="card-title">Tecnologia</p>
        <p className="card-text">
          Entenda como a tecnologia vem alterando os mais diversos tipos de relações pessoais e
          profissionais
        </p>
      </div>
      <div className="card-buttons">
        <button type="button" className="card-button" id="button-gray">
          Saiba Mais
        </button>
        <button type="button" className="card-button" id="button-purple">
          Leia Mais
        </button>
      </div>
    </div>
  );
}
export default Card;
