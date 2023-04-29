import React from "react";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import BodyText from "../../components/body-text/BodyText";

export default function Noticia() {
  return (
    <body className="noticia">
      <Header />
      <div className="content-noticia">
        <Banner />
        <BodyText />
      </div>
    </body>
  );
}
