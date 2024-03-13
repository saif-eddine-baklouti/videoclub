import "./Commentaires.css";

function Commentaires({handleCommentaire}) {
  return (
    <form onSubmit={handleCommentaire}>
      
      <textarea
          name='commentaire'
          placeholder='Ajouter votre commentaire'></textarea>
      <button>soumette</button>
    </form>
  );
}

export default Commentaires;
