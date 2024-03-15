import {NavLink} from "react-router-dom";
import "./Entete.css";
import "../../index.css";


function Entete({handleLogin, handleLogout, logging}) {

    const storageLog = JSON.parse(localStorage.getItem('log'))

    return (
        <header>
            <div className='header-container'>
                <NavLink to='/'><h1 className='logo'>Videoclub</h1></NavLink>
                <nav className='nav-container'>
                    <NavLink to='/liste-films' className="nav-item">Liste des films</NavLink>
                    {storageLog?.estLog ? <button onClick={handleLogout} value='logout' >Logout</button> : <button>Login</button>}
                </nav>
            </div>

            <form onSubmit={handleLogin}>
                <input type='text' name='usager' placeholder='Login'/>
                <button>Login</button>
            </form>
        </header>
    );
}

export default Entete;
