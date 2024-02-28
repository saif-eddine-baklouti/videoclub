import { useParams } from "react-router-dom";

import "./Film.css";

function Film() {
  const { id } = useParams();
  // = const id = params.id;

  // console.log(filmId);

  return <main>this is the id of {id}</main>;
}

export default Film;
