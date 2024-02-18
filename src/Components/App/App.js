import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entete from '../Entete/Entete.js';
import Accueil from '../Accueil/Accueil.js';
import ListeFilms from '../ListeFilms/ListeFilms';
import './App.css';

function App() {
  return (
    <Router>
      <Entete />
      <Routes>
        <Route path='/' element={<Accueil />}></Route>
        <Route path='/liste-films' element={<ListeFilms />}></Route>
      </Routes>
    </Router>
  );
}

export default App;