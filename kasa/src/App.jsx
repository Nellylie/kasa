import './sass/main.scss';
import GetRouter from './components/getRouter/GetRouters';
import { useState, useEffect } from 'react';
function App () {
  const [locations, setLocations] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLocations () {
      setDataLoading(true);
      try {
        const response = await fetch(process.env.PUBLIC_URL + 'data/logements.json');
        const locations = await response.json();
        setLocations(locations);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchLocations();
  }, []);
  console.log('erreur', error, isDataLoading);

  return <><GetRouter locations = {locations}/></>;
}

export default App;
