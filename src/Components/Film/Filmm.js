import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {AppContext} from "../App/App";
import {useContext} from "react";

import Vote from "../Vote/Vote";

import "./Film.css";
import "../../index.css";

function Filmm() {
    // const context = useContext(AppContext);
    const {id} = useParams();
    const urlFilm = `https://api-films-c.onrender.com/films/${id}`;
    const [film, setFilm] = useState({});

    // const[ voteData, setVoteData] = useState({});

    const handleVoteSubmission =  async(voteData) => {
        // setVoteData(enfantVote);
        await soumission(voteData)
    };
    // console.log(urlFilm);
    
    
    // const [commentaire, setCommentaire] = useState([])
    // console.log(filmId);

    useEffect(() => {
        fetch(urlFilm)
            .then((response) => response.json())
            .then((data) => {
                setFilm(data);
                
            });
    }, [urlFilm]);

    

    async function soumettreNote(e) {
        e.preventDefault();
        let aNotes;

        // console.log(vote);
        // if (handleNote()) {
            // console.log(handleNote());
            if (!film.notes) {
                aNotes = [parseInt(1)];

            } else {
                aNotes = film.notes;
                aNotes.push(parseInt(1));
            }
            
            const oOptions = {
                method: "PUT",
                headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({notes: aNotes}),
        };
        
        // let putNote = await fetch(urlFilm, oOptions),
        // getFilm = await fetch(urlFilm);
        
        // Promise.all([putNote, getFilm])
        // .then((reponse) => reponse[1].json())
        //     .then((data) => {
        //         console.log(data);
        //         console.log(data.notes);
                // setFilm(data);
                
                // setMoyenne(() => {
                    // let sum = aNotes.reduce((accumulator, currentValue) => {
                        //     return accumulator + currentValue
                        //     },0)
                        //     setNumNotes(aNotes.length)
                        // let moyenne = sum / aNotes.length ;
                        //     return moyenne.toFixed(2)
                        // })
                        //setVote()
                    // });
                }
    // }
    
    let blocAjouteCommentaire;
    
    if (context.estLog) {
        blocAjouteCommentaire = (
            <form >
                {/* onSubmit={soumettreCommentaire} */}
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

    // console.log(voteData)
    
    async function soumission(voteData) {
        
        console.log(voteData)

        const oOptions = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(voteData.bodyData),
        };

        // getFilm = await fetch(urlFilm);

        // Promise.all([putData, getFilm])

        await fetch(urlFilm, oOptions)
        // await fetch(urlFilm)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    // console.log(data.notes);
                    // setFilm(data);
                }).catch(e => console.error(e))
        
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

            

            <Vote notes={film.notes} onVoteSubmit={handleVoteSubmission} />
            <div>Nombre de vote : {film.notes?.length > 0 ? film.notes.length : "Aucun vote disponible"}</div>
            <div>{film.notes}</div>
            {/* soumission={soumission} */}
            {/* setVote={setVote} vote={vote} */}
            
            {/* <p>Numero de vote : {numNotes}</p> */}
            {/* <p>Moyenne de vote : {moyenne}</p> */}

            
            
            </article>
        </main>
    );
}

export default Filmm;
