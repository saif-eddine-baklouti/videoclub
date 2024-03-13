import { useState, useEffect } from "react";
import "./Vote.css";

function Vote({ notes, onVoteSubmit}) {
  const [vote, setVote] = useState(notes);
  // const [moyenne, setMoyenne] = useState(0)
  // const [numNotes, setNumNotes] = useState(notes?.length || 0)

  // const handleClickVote = () => {
  //   props.onVoteSubmit(soumettreNote)
  // };

  function handleVote(e) {
    setVote(e.target.value)
  }

  const soumettreNote = (e) => {
    e.preventDefault();
    
    let aNotes;

    if (!notes) {
        aNotes = [parseInt(vote)];
    } else {
        aNotes = notes;
        aNotes.push(parseInt(vote));
    }
    
    console.log(aNotes)
    
    // setMoyenne(() => {
      // });
    let sum = aNotes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    },0)
    let numV = aNotes.length
    let moyenneV = (sum / aNotes.length).toFixed(2) ;
    
    console.log(moyenneV)
    console.log(numV)

    let dataVote = {
      bodyData : {notes: aNotes},
      moyenneNote : moyenneV,
      numVote : numV,
    }

    setMoyenne(moyenneV);
    
    // return dataVote;
    onVoteSubmit(dataVote);
  }


  useEffect(() => {
    // Calculate average when component mounts
    if (notes && notes.length >= 0) {
      const sum = notes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      const moyenneV = (sum / notes.length).toFixed(2);
      setMoyenne(moyenneV);
    }
  }, []);

  return (
      <form>
            <div className="rating">
                <input type="radio" name="rating" onChange={handleVote} id="r-1" value={5}/>
                <label htmlFor="r-1"></label>
                <input type="radio" name="rating" onChange={handleVote} id="r-2" value={4}/>
                <label htmlFor="r-2"></label>
                <input type="radio" name="rating" onChange={handleVote} id="r-3" value={3}/>
                <label htmlFor="r-3"></label>
                <input type="radio" name="rating" onChange={handleVote} id="r-4" value={2}/>
                <label htmlFor="r-4"></label>
                <input type="radio" name="rating" onChange={handleVote} id="r-5" value={1}/>
                <label htmlFor="r-5"></label>
            </div>

            <div>Moyenne de vote : {moyenne}</div>
            <div>Nombre de vote : {notes?.length > 0 ? notes.length : "Aucun vote disponible"}</div>
            

            <button type="submit" onClick={soumettreNote}>Vote</button>
      </form>  
  );
}

export default Vote;
