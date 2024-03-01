
import React,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Entete from "../Entete/Entete.js";
import Accueil from "../Accueil/Accueil.js";
import ListeFilms from "../ListeFilms/ListeFilms";
import Film from "../Film/Film";
import Admin from "../Admin/Admin";
import Page404 from "../Page404/Page404";
import "./App.css";


export const AppContext = React.createContext();

function App() {
  
  const [logging, setLogging] = useState({ estLog: false, usager: '' })

      function login(e) {
        e.preventDefault();
        console.log(e.target.usager.value)
        if (e.target.usager.value === 'admin') {
        //  e.target.reset();

         setLogging({ estLog: true, usager: e.target.usager.value})
        //  setLogging(logging => ({...logging, estLog: true, usager: e.target.usager.value}));
        }

        console.log(logging)
      }
      console.log(logging)

  return (

    <AppContext.Provider value={logging}>
    <Router>
      <Entete handleLogin={login}/>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/liste-films" element={<ListeFilms />}></Route>
        <Route path="/film/:id" element={<Film />}></Route>
        <Route path="/admin" element={logging.estLog ? <Admin /> :<Navigate to="/"/>}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </Router>

     </AppContext.Provider>
  );
}

export default App;
