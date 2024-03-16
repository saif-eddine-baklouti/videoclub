import infosAccueil from "./Accueil.json";
import "./Accueil.css";

function Accueil() {
  const introAccueil = infosAccueil.map((info, index) => {
    return <div className="parag" key={index}>{info}</div>;
  });

  return <main>{introAccueil}</main>;
}

export default Accueil;
