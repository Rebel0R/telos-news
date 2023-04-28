import "./CardReadMore.css";

function CardReadMore() {
  return (
    <div className="read-more-box">
      <p className="read-more-title">
        <i className="fa-solid fa-ellipsis-vertical"></i>Leia também
      </p>
      <img src="./images/img-ft-read1.png" alt="Imagem referente ao leia também"></img>
      <p className="matter-title">Mercado de Trabalho</p>
      <p className="matter-text">Como se comportar em uma entrevista online</p>
      <button type="button" className="read-more-button">
        ler agora
      </button>
    </div>
  );
}

export default CardReadMore;
