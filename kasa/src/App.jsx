import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Header from './components/header/Header';
import LocationSelected from './pages/locationselected/LocationSelected';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/footer/Footer';

function App () {
  // Déclaration d'un state pour stocker les données du fichier json
  const [data, setData] = useState(null);

  // Récupération des données du fichier json avec axios après le premier rendu du composant "App"
  useEffect(() => {
    axios.get('data/logements.json').then((res) => setData(res.data));
  }, []);
  // Rendu du composant "App" et gestion des routes avec react-router-dom
  // affichage du header et du footer sur toutes les pages
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation/:locationId" element={<LocationSelected data={data} />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  <Footer/>
  </>;
}

export default App;
