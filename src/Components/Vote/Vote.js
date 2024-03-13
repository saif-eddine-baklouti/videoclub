function Vote({onChangeVote, moyenne}) {
    
    function handleVote(e) {
        onChangeVote(e.target.value)
    }

    return (
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

        <button type="submit" >Vote</button>
    
    </div>

    );
};

export default Vote;