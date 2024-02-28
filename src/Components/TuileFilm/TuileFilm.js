import "./TuileFilm.css";

function TuileFilm(props) {
  // console.log(props);

  return (
    <article className="film-card">
      <h1>{props.data.titre}</h1>
      <img src={`img/${props.data.titreVignette}`} alt="props.data.titre" />
      <h4>{props.data.annee}</h4>
      <h4>{props.data.realisation}</h4>
    </article>
  );
}

export default TuileFilm;
