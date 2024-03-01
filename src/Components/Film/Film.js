import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App/App";
import { useContext } from "react";

import "./Film.css";


function Film() {

  const context = useContext(AppContext)
  const { id } = useParams();


  const urlFilm = `https://api-films-c.onrender.com/films/${id}`;
  // console.log(urlFilm);
  const [film, setFilm] = useState({})

  // console.log(filmId);

  useEffect(() => {
    fetch(urlFilm)
      .then((response) => response.json())
      .then((data) => {
        // setListeFilms(data);
        console.log(data);
        setFilm(data);
        console.log(data.notes);
      })
  }, [urlFilm]);

  async function soumettreNote(e) {
    
    let aNotes;

    if (!film.notes) {
      aNotes = [1];
    } else {
      aNotes = film.notes;
      aNotes.push(1);
    }
    
    const oOptions = {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({notes: aNotes})
    }

    let putNote = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);
    
    Promise.all([putNote, getFilm])
    .then((reponse) => reponse[1].json())
    .then((data) => {
      console.log(data)
      console.log(data.notes)
      setFilm(data);


      //setMoyenne()
      //setVote()
    })
    
  }

  let blocAjouteCommentaire;

  if (context.estLog) {
    blocAjouteCommentaire = <form onSubmit={soumettreCommentaire}>
                              <textarea name="" placeholder="Ajouter votre commentaire"></textarea>
                              <button>soumette</button>
                            </form>
  }

  async function soumettreCommentaire(e) {
    e.preventDefault();
    
    let aCommentaires;

    if (!film.commentaires) {
      aCommentaires = [{commentaire: 'je suis un commentaire', usager: context.usager}];
    } else {
      aCommentaires = film.commentaires;
      aCommentaires.push({commentaire: 'je suis un commentaire', usager: context.usager});
    }
    
    const oOptions = {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({commentaires: aCommentaires})
    }

    let putCommentaire = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);
    
    Promise.all([putCommentaire, getFilm])
    .then((reponse) => reponse[1].json())
    .then((data) => {
      console.log(data)
      console.log(data.notes)
      setFilm(data);

    })
    
  }

  return <main>
            <img src={`/img/${film?.titreVignette}`} alt={film?.titre} />
            <h2>{film?.titre}</h2>
            <p>{film?.realisation}</p>
            <p>{film?.annee}</p>
            <p>{film?.genres}</p>
            <p>{film?.description}</p>
            <p>{film?.notes}</p>
            {blocAjouteCommentaire}
            <button onClick={soumettreNote}>Vote</button>
        </main>;
}

export default Film;
