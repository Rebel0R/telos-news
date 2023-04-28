import "./AppStyle.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import MiniCard from "./components/mini-card/MiniCard";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-cards1">
        <Card />
        <div>
          <MiniCard />
          <MiniCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
