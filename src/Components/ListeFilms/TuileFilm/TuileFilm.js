import { Link } from "react-router-dom";
//import './TuileFilm.css';

function TuileFilm(props) {
  console.log(props);

  return (
    <Link to={`/film/${props.id}`}>
      <article>
        fdsfdsfds Film
        <h1>{props.film}</h1>
      </article>
    </Link>
  );
}

export default TuileFilm;
