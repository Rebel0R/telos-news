import "./BodyText.css";
import React from "react";

export default function BodyText(props) {
  const news = props.news;
  return (
    <div className="body-text">
      <p className="news-resume">{news.resume}</p>
      <p className="news-title">{news.subject}</p>
      <p className="news-text">{news.description}</p>
    </div>
  );
}
