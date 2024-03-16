import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TuileFilm from "../TuileFilm/TuileFilm";
import Filtres from "../Filtres/Filtres";
import "./ListeFilms.css";

function ListeFilms() {

  const [urlFilms, setUrlFilms] = useState("https://api-films-c.onrender.com/films");

  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {
    fetch(urlFilms)
      .then((reponse) => reponse.json())
      .then((data) => {
        setListeFilms(data);
      });
  }, [urlFilms]);

  const tuilesFilm = listeFilms.map((film, index) => {
    return (
      <Link key={index} to={`/film/${film.id}`}>
        <TuileFilm key={index} data={film} filtre={urlFilms} />
      </Link>
    );
  });

  return (
    <main>
      <div> <Filtres urlFiltre={setUrlFilms}/></div>
      <div className="grille grille--3">{tuilesFilm}</div>
    </main>
  );
}

export default ListeFilms;
