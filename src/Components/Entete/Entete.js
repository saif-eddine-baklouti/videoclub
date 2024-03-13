import {useContext} from "react";
import {AppContext} from "../App/App";
import {NavLink} from "react-router-dom";
import "./Entete.css";
import "../../index.css";


function Entete({handleLogin, handleLogout}) {
    const context = useContext(AppContext);
    const storageLog = localStorage.getItem('log')

    // console.log(context)
    if (context.estLog) {
        // console.log(context)
        // props.setLog(() => ({...logging,estLog: false, usager: "" }));
        // props.setLog({ estLog: false, usager: "" });
        localStorage.setItem('log', JSON.stringify(context.estLog))
      }

    return (
        <header>
            <div className='header-container'>
                <NavLink to='/'><h1 className='logo'>Videoclub</h1></NavLink>
                <nav className='nav-container'>

                    <NavLink to='/liste-films' className="nav-item">Liste des films</NavLink>
                    {/* {context.estLog ? <NavLink to='/admin' className="nav-item">Admin</NavLink> : ""} */}
            {storageLog ? <button onClick={handleLogout} value='logout' >Logout</button> : <button>Login</button>}
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
