import LocationCards from '../../components/locationcards/LocationCards';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import imgBannerHome from '../../media/image-banner-home.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Home ({ locations }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('data/logements.json').then((res) => setData(res.data)); // requète AXIOS ici également pour prochaine utilisation API
  }, []);
  return <>
  <Banner imgSrc={imgBannerHome}/>
  <div className='location-list'>
  {data.map((oneLocation) => (<LocationCards className = "card-container"
                key = {oneLocation.id} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div>
  <Footer/></>;
}

export default Home;
