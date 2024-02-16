import TuileFilm from '../TuileFilm/TuileFilm';
//import './ListeFilms.css';

function ListeFilms() {

    const listeFilms = [
        {titre: 'Film 1', realisateur: 'Billy', annee: '199'},
        {titre: 'Film 2', realisateur: 'Billy', annee: '2024'},
        {titre: 'Film 3', realisateur: 'Billy', annee: '2020'},
        {titre: 'Film 4', realisateur: 'Billy', annee: '2009'},
    ];


    const tuilesFilm = listeFilms.map((film, index) => {
        return <TuileFilm key={index} data={film} />
    });


    return (
        <main>

            {tuilesFilm}

        </main>
    );
  }
  
  export default ListeFilms;