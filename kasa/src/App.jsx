import './sass/main.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import LocationSelected from './pages/locationselected/LocationSelected';
import Error from './pages/error/Error';
import About from './pages/about/About';

function App () {
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://nellylie.github.io/kasa/data/logements.json').then((res) => { if (res.ok) { return res.json(); } throw res; }).then((set) => {
      setLocations(set);
    }).catch((err) => {
      console.log(err); setError(true);
    });
  }, []);
  console.log(error);

  return <>
 <Routes>
          <Route path="/" element= {<Home locations = {locations}/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/error" element= {<Error/>}/>
          <Route path="/*" element= {<Error/>}/>
          <Route path="/home/:id" element={<LocationSelected />} />
        </Routes>;
  </>;
}

export default App;
