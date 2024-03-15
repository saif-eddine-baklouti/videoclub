import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
// import {AppContext} from "../App/App";


import "./Film.css";
import "../../index.css";
import Vote from "../Vote/Vote";
import Commentaires from "../Commentaires/Commentaires";

function Film() {
    
    // const context = useContext(AppContext);
    const {id} = useParams();
    const urlFilm = `https://api-films-c.onrender.com/films/${id}`;
    const [film, setFilm] = useState({});
    const [moyenne, setMoyenne] = useState(null)

    const storageLog = JSON.parse(localStorage.getItem('log'))

    useEffect(() => {
        fetch(urlFilm)
        .then((response) => response.json())
            .then((data) => {
                setFilm(data);
                data.notes ? calculMoyenne(data.notes) : setMoyenne(0);
                
            });
    }, [urlFilm]);

    function calculMoyenne (arrNotes) {
        setMoyenne(() => {
            let sum = arrNotes.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                    },0)
                let moyenne = sum / arrNotes.length ;
                    return moyenne.toFixed(2)
                })
    }

    function soumettreNote(e){
        e.preventDefault();
        const vote = e.target.id
    let aNotes;

        if (!film.notes) {
            aNotes = [parseInt(vote)];
        
        } else {
            aNotes = film.notes;
            aNotes.push(parseInt(vote));
        }
        
        const oOptions = {
            method: "PUT",
            headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({notes: aNotes}),
    };

    soumissionData(oOptions)
    
}

    function soumettreCommentaire(e) {
    e.preventDefault();
    const nouveauCommentaire = e.target.commentaire.value
    if (nouveauCommentaire !== '') {
        
    
    let aCommentaires;

    if (!film.commentaires) {
        aCommentaires = [
            {commentaire: nouveauCommentaire, usager: storageLog.usager},
        ];
    } else {
        aCommentaires = film.commentaires;
        aCommentaires.push({
            commentaire: nouveauCommentaire,
            usager: storageLog.usager,
        });
    }

    const oOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({commentaires: aCommentaires}),
    };
    soumissionData(oOptions)
    }
    e.target.reset();
}

async function soumissionData(option) {
    
    let putData = await fetch(urlFilm, option),
        getFilm = await fetch(urlFilm);
    
    Promise.all([putData, getFilm])
    .then((reponse) => reponse[1].json())
    .then((data) => {
        setFilm(data);
        data.notes ? calculMoyenne(data.notes) : setMoyenne(0);
        
    });

}

return ( 
    <article className="film-container">
        <div className="film-item-1">
        <img src={`/img/${film?.titreVignette}`} alt={film?.titre} />
        <h2>{film?.titre}</h2>
        <p>{film?.realisation}</p>
        <p>{film?.annee}</p>
        <p>{film?.genres}</p>
        <p>{film?.description}</p>
        </div>
        <div className="film-item-2">
        <Vote className="vote" soumissionVote={soumettreNote} />
        <div>Moyenne de vote : {moyenne}</div>
        <div>Nombre de vote : {film.notes?.length > 0 ? film.notes.length : "Aucun vote disponible"}</div>
        
        {storageLog ? <Commentaires handleCommentaire={soumettreCommentaire} /> : ''}    
        <div>
            {film.commentaires?.length > 0 ? film.commentaires.map((commentaire, i) => (
                <p key={i} > {commentaire.commentaire}  from  {commentaire.usager} </p>
            )) : 'Aucun commentaire disponible'}
        
        </div>
        </div>
    </article>
    
    );
}
export default Film;