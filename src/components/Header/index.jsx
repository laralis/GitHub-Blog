import "./style.css";
import logo from "../../assets/logo.png";
import effect from "../../assets/effect.png";
export function Header() {
  return (
    <div>
      <header className="cover">
        <img src={effect} className="effect" />
        <img src={logo} className="logo" />
        <img src={effect} className="effect" />
      </header>
    </div>
  );
}
