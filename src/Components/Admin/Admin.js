import {useContext} from "react";
import {AppContext} from "../App/App";
// import { useEffect } from "react";
import "./Admin.css";

function Admin(props) {
  const context = useContext(AppContext);
  console.log(context)

  // useEffect( () => {
    if (context.estLog) {
      // props.setLog(() => ({...logging,estLog: false, usager: "" }));
      props.setLog({ estLog: false, usager: "" });
    }

  // });

  return( 
    <>
      <p>Pour bénéficier de toutes les fonctionnalités d'accessibilité du site, vous devez vous connecter.</p>
    </>

  );
}

export default Admin;
