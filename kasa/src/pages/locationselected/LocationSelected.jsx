import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Gallery from '../../components/gallery/Gallery';
import Error from '../../components/error/Error';
import Collapse from '../../components/collapse/Collapse';
import Star from '../../components/star/Star';

// affichage de la page "LocationSelected" avec le composant "Gallery" et le composant "Collapse"
function LocationSelected ({ data }) {
  // le paramètre "id" est récupéré depuis l'url et correspond à l'id du logement sélectionné
  const { locationId } = useParams();
  // Déclaration d'un state pour stocker les données du logement sélectionné
  const [dataSelected, setDataSelected] = useState(null);
  // Déclaration d'un state pour stocker le résultat de la comparaison entre l'id du logement sélectionné et
  // les id des logements du fichier json
  const [selection, setSelection] = useState(false);
  // "useEffect" permet de mettre à jour le state "selection" et le state "dataSelected" à chaque changement
  // de l'id du logement sélectionné
  useEffect(() => {
    const select = data?.find((accomodation) => accomodation.id === locationId);
    if (!select) {
      setSelection(false);
    } else {
      setSelection(true);
      setDataSelected(select);
      ;
    }
  },
  [locationId, dataSelected, data]);

  return <div>{selection
    ? (
    <main className = "main-accomodation">
        <Gallery pictures = { dataSelected?.pictures }/>
        <div className="head-accomodation">
        <div className = "contain-accomodation">
          <div className ="title">{dataSelected?.title}</div>
          <div className="location">{dataSelected?.location}</div>
          <div className="tags-parent">{dataSelected?.tags?.map((tag, i) => (
      <div key={tag + i} className="tag"><p>{tag}</p></div>))}
      </div>
        </div>

        <div className="host-head">
          <figure className="host-description">
          <figcaption className="host-name">{dataSelected?.host?.name}</figcaption>
          <img className = "host-avatar" src={dataSelected?.host?.picture} alt="hôte"/>
          </figure>
       </div>
        </div>
          <Star rating = {dataSelected?.rating} />
        <div className="collapse-parent">
        <Collapse title = "Description" description = { dataSelected?.description } />
        <Collapse title = "Equipement" description = { dataSelected?.equipments } />
        </div>
      </main>)
    : (
      <Error/>)}</div>;
}

export default LocationSelected;
