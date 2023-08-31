import { useParams } from 'react-router-dom';

function LocationSelected () {
  const { locationId } = useParams();
  return <div>{locationId}</div>;
}

export default LocationSelected;
