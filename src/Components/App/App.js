import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Entete from "../Entete/Entete.js";
import Accueil from "../Accueil/Accueil.js";
import ListeFilms from "../ListeFilms/ListeFilms";
import Film from "../Film/Film";
import Page404 from "../Page404/Page404";
import "./App.css";

export const AppContext = React.createContext();

function App() {

    const [logging, setLogging] = useState({estLog: false, usager: ""});
    
    function login(e) {
        e.preventDefault();
        if (e.target.usager.value === "admin") {
            localStorage.setItem('log', JSON.stringify({ estLog: true, usager: e.target.usager.value }))
        }    
        const storageLog = JSON.parse(localStorage.getItem('log'))
        setLogging(storageLog)
        e.target.reset();
    }
    
    function logout(e) {
        if (e.target.value === "logout") {
            setLogging((logging) => ({...logging,estLog: false, usager: "" }));
            localStorage.clear();
        }    
    }

    return (
            <Router>
                <Entete handleLogin={login} handleLogout={logout} logging={logging} />
                <Routes>
                    <Route path='/' element={<Accueil />}></Route>
                    <Route path='/liste-films' element={<ListeFilms />}></Route>
                    <Route path='/film/:id' element={<Film />}></Route>
                    <Route path='/*' element={<Page404 />}></Route>
                </Routes>
            </Router>
    );
}

export default App;
