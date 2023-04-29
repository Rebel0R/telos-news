import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import MiniCard from "../../components/mini-card/MiniCard";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import BigCard from "../../components/big-card/BigCard";
import news from "../../data/news-data";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content-cards1">
        <Card singleNews={news[0]} />
        <div>
          {news.map((minicard, index) => {
            if (index === 1 || index === 2) {
              return <MiniCard key={index} singleNews={minicard} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="content-cards2">
        {news.map((bigcard, index) => {
          if (index === 3 || index === 4) {
            return <BigCard key={index} singleNews={bigcard} />;
          } else {
            return null;
          }
        })}
      </div>
      <Footer news={news} />
    </div>
  );
}
