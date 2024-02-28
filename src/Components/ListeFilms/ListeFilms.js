import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TuileFilm from "../TuileFilm/TuileFilm";
import "./ListeFilms.css";

function ListeFilms() {
  // const listeFilms = [
  //   { titre: "Film 1", realisateur: "Billy", annee: "199" },
  //   { titre: "Film 2", realisateur: "Billy", annee: "2024" },
  //   { titre: "Film 3", realisateur: "Billy", annee: "2020" },
  //   { titre: "Film 4", realisateur: "Billy", annee: "2009" },
  // ];

  const urlListeFilms = "https://api-films-c.onrender.com/films";
  // const urlListeFilms = "data/titre-asc.json";
  const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        setListeFilms(data);
        // console.log(data);
      });
  }, [urlFiltre]);

  // useEffect(() => {
  //   fetch(urlFiltre)
  //     .then((reponse) => reponse.json())
  //     .then((data) => {
  //       setListeFilms(data);
  //       // console.log(data);
  //     });
  // }, [urlFiltre]);

  const tuilesFilm = listeFilms.map((film, index) => {
    // console.log(film);
    return (
      <Link key={index} to={`/film/${film.id}`}>
        <TuileFilm key={index} data={film} />
      </Link>
    );
  });

  function filtre(e) {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case "Titre alphabétique (A-Z)":
        // setUrlFiltre("data/titre-asc.json");
        setUrlFiltre(`${urlListeFilms}?orderBy=titre&orderDirection=asc`);
        console.log(urlFiltre);
        break;
      case "Titre alphabétique (Z-A)":
        // setUrlFiltre("data/titre-desc.json");
        setUrlFiltre(`${urlListeFilms}?orderBy=titre&orderDirection=desc`);
        break;
      case "Réalisateur alphabétique (A-Z)":
        // setUrlFiltre("data/realisation-asc.json");
        setUrlFiltre(`${urlListeFilms}?orderBy=realisation&orderDirection=asc`);
        break;
      case "Réalisateur alphabétique (Z-A)":
        // setUrlFiltre("data/realisation-desc.json");
        setUrlFiltre(
          `${urlListeFilms}?orderBy=realisation&orderDirection=desc`
        );
        break;
      case "Par année (de plus récent)":
        // setUrlFiltre("data/annee-desc.json");
        setUrlFiltre(`${urlListeFilms}?orderBy=annee&orderDirection=desc`);
        break;
      case "Par année (de plus ancien)":
        // setUrlFiltre("data/annee-asc.json");
        setUrlFiltre(`${urlListeFilms}?orderBy=annee&orderDirection=asc`);
        break;
      default:
        break;
    }
  }

  function secondeFunc() {
    // console.log(`func num 2`);
  }

  return (
    <main>
      <ul>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Titre alphabétique (A-Z)
        </li>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Titre alphabétique (Z-A)
        </li>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Réalisateur alphabétique (A-Z)
        </li>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Réalisateur alphabétique (Z-A)
        </li>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Par année (de plus récent)
        </li>
        <li
          onClick={(e) => {
            filtre(e);
            secondeFunc();
          }}
        >
          Par année (de plus ancien)
        </li>
      </ul>
      <div className="grille grille--3">{tuilesFilm}</div>
    </main>
  );
}

export default ListeFilms;
