import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Header from './components/header/Header';
import LocationSelected from './pages/locationselected/LocationSelected';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App () {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('data/logements.json').then((res) => setData(res.data)); // requète AXIOS ici également pour prochaine utilisation API
  }, []);

  return <>
  <Header/>

 <Routes>
          <Route path="/" element={<Home data = {data }/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/accomodation/:locationId" element= {<LocationSelected data = { data }/>}/>
          <Route path="/*" element= {<Error/>}/>

        </Routes>;
  </>;
}

export default App;
