import {useContext} from "react";
import {AppContext} from "../App/App";
import {NavLink} from "react-router-dom";
import "./Entete.css";
import "../../index.css";

function Entete(props) {
    const context = useContext(AppContext);
    return (
        <header>
            <div className='header-container'>
                <NavLink to='/'>
                    <h1 className='logo'>Videoclub</h1>
                </NavLink>
                <nav className='nav-container'>
                    <NavLink to='/liste-films' className="nav-item">Liste des films</NavLink>

                    {context.estLog ? <NavLink to='/admin' className="nav-item">Admin</NavLink> : ""}
                    {context.estLog ? <NavLink to='/admin' className="nav-item" log="logout">Logout</NavLink> : <NavLink to='/admin' className="nav-item" log="login" >Login</NavLink>}
                </nav>
            </div>

            <form onSubmit={props.handleLogin}>
                <input type='text' name='usager' placeholder='Login' />
                <button>Login</button>
            </form>
        </header>
    );
}

export default Entete;
