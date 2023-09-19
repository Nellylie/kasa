import { Link } from 'react-router-dom';
// affichage des cartes des logements sur la page d'accueil
function LocationCards ({ id, cover, title }) {
  // "Link to" permet de créer un lien vers la page du logement correspondant à l'id que nous lui renseignons dans l'url
  return <Link className= "card-link" to={`/accomodation/${id}`}><figure id = {id} className="location-figure">
                <img className="location-cover" src={cover} alt='location-illustration' />
                <div className="location-filter"></div>
                <figcaption className="location-title"> {title} </figcaption>
            </figure>
        </Link>;
}

export default LocationCards;
