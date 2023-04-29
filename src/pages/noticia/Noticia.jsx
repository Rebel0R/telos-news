import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";

export default function Noticia() {
  return (
    <div className="noticia">
      <Header />
      <div className="content-noticia">
        <Banner />
      </div>
    </div>
  );
}
