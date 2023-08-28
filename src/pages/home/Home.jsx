import LocationCards from '../../components/locationcards/LocationCards';
import Banner from '../../components/banner/Banner';

function Home ({ locations }) {
  return <>
  <Banner imgSrc={process.env.PUBLIC_URL + '/media/image-banner-home.jpg'}/>
  <div className='location-list'>
  {locations.map((oneLocation) => (<LocationCards className = "card-container"
                key = {oneLocation.id} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div></>;
}

export default Home;
