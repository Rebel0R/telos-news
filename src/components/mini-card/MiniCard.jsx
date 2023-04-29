import { Link } from "react-router-dom";
import "./MiniCard.css";

function MiniCard(props) {
  const singleNews = props.singleNews;

  return (
    <div className="minicard-box">
      <img src={singleNews.image} alt="Imagem da mini noticia"></img>
      <p className="minicard-title">{singleNews.title}</p>
      <Link to={`/news/${singleNews.id}`}>
        <button className="minicard-button">Ler Agora</button>
      </Link>
    </div>
  );
}

export default MiniCard;
