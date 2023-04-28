import "./Header.css";

function Header() {
  return (
    <header>
      <div className="navbar">
        <img id="logo-telos" src="./images/logo-telos.png" alt="Logo Télos"></img>
        <button type="button" className="button-enter">
          <i class="fa-sharp fa-solid fa-right-to-bracket"></i> Entrar
        </button>
      </div>
    </header>
  );
}

export default Header;
