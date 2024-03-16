import "./Vote.scss";
function Vote({soumissionVote, moyenne, numVote}) {
    
    // function handleVote(e) {
    //     if (e.target.value !== undefined) {
            
    //         onClickVote(e.target.value)
    //         // soumissionVote(e);
    //     }
    //     // console.log(e.target.value)
    // }

    return (
        <>
    <div className="rating" onClick={(e) => {soumissionVote(e)}}>
        <input type="radio" name="rating" id="r-1" />
        <label htmlFor="r-1" id={5} ></label>
        <input type="radio" name="rating" id="r-2" />
        <label htmlFor="r-2" id={4} ></label>
        <input type="radio" name="rating" id="r-3" />
        <label htmlFor="r-3" id={3} ></label>
        <input type="radio" name="rating" id="r-4" />
        <label htmlFor="r-4" id={2} ></label>
        <input type="radio" name="rating" id="r-5" />
        <label htmlFor="r-5" id={1} ></label>    
    </div>


<div>Moyenne de vote : {moyenne}</div>
{/* <div>Nombre de vote : {numVote != false ? numVote : "Aucun vote disponible"}</div> */}
<div>Nombre de vote : { numVote !== 0 ? numVote : "Aucun vote disponible"}</div>
</>
    );
};

export default Vote;