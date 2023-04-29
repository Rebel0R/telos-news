import CardReadMore from "../card-read-more/CardReadMore";
import "./Footer.css";

function Footer(props) {
  const news = props.news;
  return (
    <div className="read-more">
      {news.map((readmore, index) => {
        if (index === 5 || index === 6 || index === 7) {
          return <CardReadMore key={index} singleNews={readmore} />;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Footer;
