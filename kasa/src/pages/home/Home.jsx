import LocationCards from '../../components/locationcards/LocationCards';
import Footer from '../../components/footer/Footer';

function Home ({ locations }) {
  return <>
  <div className='location-list'>
  {locations.map((oneLocation) => (<LocationCards className = "card-container"
                key = {oneLocation.id} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div>
  <Footer/></>;
}

export default Home;
