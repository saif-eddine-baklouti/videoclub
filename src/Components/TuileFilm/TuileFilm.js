import "./TuileFilm.css";

function TuileFilm(props) {
  let filtreRealisation = props.filtre.includes("realisation")
  let filtreAnnee = props.filtre.includes("annee")

  return (
    <article className="film-card">
      <h1>{props.data.titre}</h1>
      <img src={`img/${props.data.titreVignette}`} alt="props.data.titre" />
      <h4>{filtreAnnee ? props.data.annee : ''}</h4>
      <h4>{filtreRealisation ? props.data.realisation : ''}</h4>
    </article>
  );
}

export default TuileFilm;
