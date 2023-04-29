import "./CardReadMore.css";

function CardReadMore(props) {
  const singleNews = props.singleNews;
  return (
    <div className="read-more-box">
      <p className="read-more-title">
        <i className="fa-solid fa-ellipsis-vertical"></i>Leia também
      </p>
      <img src={singleNews.image} alt="Imagem referente ao leia também"></img>
      <p className="matter-title">{singleNews.subject}</p>
      <p className="matter-text">{singleNews.title}</p>
      <button type="button" className="read-more-button">
        ler agora
      </button>
    </div>
  );
}

export default CardReadMore;
