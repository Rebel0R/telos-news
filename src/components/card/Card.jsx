import "./Card.css";

function Card(props) {
  const singleNews = props.singleNews;
  return (
    <div className="card-box">
      <img src={singleNews.image} alt="Imagem do Card"></img>
      <div className="card-texts">
        <p className="card-title">{singleNews.title}</p>
        <p className="card-text">{singleNews.resume}</p>
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
