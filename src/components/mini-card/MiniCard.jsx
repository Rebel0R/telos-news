import "./MiniCard.css";

function MiniCard(props) {
  const singleNews = props.singleNews;

  return (
    <div className="minicard-box">
      <img src={singleNews.image} alt="Imagem da mini noticia"></img>
      <p className="minicard-title">{singleNews.title}</p>
      <button className="minicard-button">Ler Agora</button>
    </div>
  );
}

export default MiniCard;
