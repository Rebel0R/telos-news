import React from "react";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import MiniCard from "../../components/mini-card/MiniCard";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import BigCard from "../../components/big-card/BigCard";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="content-cards1">
        <Card />
        <div>
          <MiniCard />
          <MiniCard />
        </div>
      </div>
      <div className="content-cards2">
        <BigCard />
        <BigCard />
      </div>
      <Footer />
    </div>
  );
}
