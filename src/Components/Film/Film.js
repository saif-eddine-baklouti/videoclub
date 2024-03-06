import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {AppContext} from "../App/App";
import {useContext} from "react";

import Vote from "../Vote/Vote";

import "./Film.css";
import "../../index.css";

function Film() {
    const context = useContext(AppContext);
    const {id} = useParams();

    const urlFilm = `https://api-films-c.onrender.com/films/${id}`;
    // console.log(urlFilm);
    const [film, setFilm] = useState({});
    const [vote, setVote] = useState(0);
    const [moyenne, setMoyenne] = useState(0)
    const [numNotes, setNumNotes] = useState(0)
    // const [commentaire, setCommentaire] = useState([])

    // console.log(filmId);

    useEffect(() => {
        fetch(urlFilm)
            .then((response) => response.json())
            .then((data) => {
                // setListeFilms(data);
                console.log(data);
                setFilm(data);
                console.log(data.notes);
                if (data.notes) {
                    
                    setMoyenne(() => {
                        let sum = data.notes.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue
                            },0)
                            setNumNotes(data.notes.length)
                            console.log(data.notes.length)
                            console.log(sum)
                        let moyenne = sum / data.notes.length;
                            return moyenne.toFixed(2)
                        })
                }
            });
    }, [urlFilm]);

    // console.log(vote)
    // function handleNote(e) {
    //     let ratingValue = e.target.name ;

    //     console.log(e.target.name)
    //     if (e.target.name === "rating") {
    //     //     console.log(e.target.value)
            
    //         return e.target.value
    //     } else return 

    // }

    async function soumettreNote(e) {
        e.preventDefault();
        let aNotes;

        console.log(vote);
        // if (handleNote()) {
            // console.log(handleNote());
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
        
        let putNote = await fetch(urlFilm, oOptions),
        getFilm = await fetch(urlFilm);

        Promise.all([putNote, getFilm])
            .then((reponse) => reponse[1].json())
            .then((data) => {
                console.log(data);
                console.log(data.notes);
                setFilm(data);
                
                setMoyenne(() => {
                let sum = aNotes.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                    },0)
                    setNumNotes(aNotes.length)
                let moyenne = sum / aNotes.length ;
                    return moyenne.toFixed(2)
                })
                //setVote()
            });
        }
    // }
    
    let blocAjouteCommentaire;
    
    if (context.estLog) {
        blocAjouteCommentaire = (
            <form onSubmit={soumettreCommentaire}>
                <textarea
                    name=''
                    placeholder='Ajouter votre commentaire'></textarea>
                <button>soumette</button>
            </form>
        );
    }

    async function soumettreCommentaire(e) {
        e.preventDefault();

        let aCommentaires;

        if (!film.commentaires) {
            aCommentaires = [
                {commentaire: "je suis un commentaire", usager: context.usager},
            ];
        } else {
            aCommentaires = film.commentaires;
            aCommentaires.push({
                commentaire: "je suis un commentaire",
                usager: context.usager,
            });
        }

        const oOptions = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({commentaires: aCommentaires}),
        };

        let putCommentaire = await fetch(urlFilm, oOptions),
            getFilm = await fetch(urlFilm);

        Promise.all([putCommentaire, getFilm])
            .then((reponse) => reponse[1].json())
            .then((data) => {
                console.log(data);
                console.log(data.notes);
                setFilm(data);
            });
    }

    return (
        <main>
            <article className="film-container">
            <img src={`/img/${film?.titreVignette}`} alt={film?.titre} />
            <h2>{film?.titre}</h2>
            <p>{film?.realisation}</p>
            <p>{film?.annee}</p>
            <p>{film?.genres}</p>
            <p>{film?.description}</p>
            {/* <p>{film?.notes}</p> */}
            <div>{blocAjouteCommentaire}</div>

            <form >

            <Vote  vote={setVote} />
            
            <p>Numero de vote : {numNotes}</p>
            <p>Moyenne de vote : {moyenne}</p>

            <button onClick={soumettreNote}>Vote</button>
            </form>
            </article>
        </main>
    );
}

export default Film;
