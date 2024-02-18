import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entete from "../Entete/Entete.js";
import Accueil from "../Accueil/Accueil.js";
import ListeFilms from "../ListeFilms/ListeFilms";
import Film from "../Film/Film";
import Admin from "../Admin/Admin";
import Page404 from "../Page404/Page404";
import "./App.css";

function App() {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/liste-films" element={<ListeFilms />}></Route>
        <Route path="/film/:id" element={<Film />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
