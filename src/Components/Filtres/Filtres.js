// import { useState } from "react";
import "./Filtres.css";

function Filtres(props) {
  
  const urlListeFilms = "https://api-films-c.onrender.com/films";

  function handleFiltres(e){
    
    
    console.log(e.target)
    switch (e.target.textContent) {
      case "Titre alphabétique (A-Z)":
        props.urlFiltre(`${urlListeFilms}?orderBy=titre&orderDirection=asc`);
        break;
        case "Titre alphabétique (Z-A)":
        props.urlFiltre(`${urlListeFilms}?orderBy=titre&orderDirection=desc`);
        break;
        case "Réalisateur alphabétique (A-Z)":
        props.urlFiltre(`${urlListeFilms}?orderBy=realisation&orderDirection=asc`);
        break;
        case "Réalisateur alphabétique (Z-A)":
        props.urlFiltre(`${urlListeFilms}?orderBy=realisation&orderDirection=desc`);
        break;
        case "Par année (de plus récent)":
        props.urlFiltre(`${urlListeFilms}?orderBy=annee&orderDirection=desc`);
        break;
        case "Par année (de plus ancien)":
        props.urlFiltre(`${urlListeFilms}?orderBy=annee&orderDirection=asc`);
        break;
      default:
        break;
      }
    }

  function handleFiltreActif(e) {

    const filtreDom = document.querySelector('ul[data-filtre]')
    const elFiltreDom = filtreDom.querySelectorAll('li')
    const filtreTarget = e.target;
    
    elFiltreDom.forEach(element => {
      element.classList.remove("actif");

      if (filtreTarget === element ) {
        element.classList.add("actif")
      }
    });
  }
  
  return (      
    <ul onClick={(e) => {handleFiltres(e); handleFiltreActif(e);}} className="filtre-wrap" data-filtre>
        <li className="filtre-item">Titre alphabétique (A-Z)</li>
        <li className="filtre-item">Titre alphabétique (Z-A)</li>
        <li className="filtre-item">Réalisateur alphabétique (A-Z)</li>
        <li className="filtre-item">Réalisateur alphabétique (Z-A)</li>
        <li className="filtre-item">Par année (de plus récent)</li>
        <li className="filtre-item">Par année (de plus ancien)</li>
    </ul>
  );
}

export default Filtres;
