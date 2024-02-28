import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Film.css";

function Film() {
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

      //setMoyenne()
      //setVote()
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
        
            <button onClick={soumettreNote}>Vote</button>
        </main>;
}

export default Film;
