import { Link } from 'react-router-dom'

function LocationCards ({ id, cover, title }) {
  return <Link className= "card" to={'/locations/' + { id }}><figure id = {id} className="location-figure">
                <img className="location-cover" src={cover} alt='location-illustration' />
                <div className="location-filter"></div>
                <figcaption className="figuretitle"> {title} </figcaption>
            </figure>
        </Link>
}

export default LocationCards
