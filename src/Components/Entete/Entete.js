import { useContext } from "react";
import { AppContext } from "../App/App";
import { NavLink } from "react-router-dom";
import "./Entete.css";



function Entete(props) {

    const context = useContext(AppContext)
  return (
    <header>
      <NavLink to="/">
        <h1>Videoclub</h1>
      </NavLink>
      <nav>
        <NavLink to="/liste-films">Liste des films</NavLink>
        
        {context.estLog ? <NavLink to="/admin">Admin</NavLink> : ''}
      </nav>

      <form onSubmit={props.handleLogin}>
        <input type="text" name="usager" placeholder="Login"/>
        <button>Login</button>
      </form>
    </header>
  );
}

export default Entete;
