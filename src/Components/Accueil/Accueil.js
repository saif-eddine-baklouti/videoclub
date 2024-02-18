import infosAccueil from "./Accueil.json";
import "./Accueil.css";

function Accueil() {
  const introAccueil = infosAccueil.map((info, index) => {
    return <div data={index}>{info}</div>;
  });

  return <main>{introAccueil}</main>;
}

export default Accueil;
