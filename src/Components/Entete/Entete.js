import { NavLink } from "react-router-dom";
import "./Entete.css";

function Entete() {
  return (
    <header>
      <NavLink to="/">
        <h1>Videoclub</h1>
      </NavLink>
      <nav>
        <NavLink to="/liste-films">Liste des films</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}

export default Entete;
