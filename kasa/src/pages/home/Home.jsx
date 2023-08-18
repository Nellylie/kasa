import LocationCards from '../../components/locationcards/LocationCards';

function Home ({ locations }) {
  return <>
  <div className='location-list'>
  {locations.map((oneLocation) => (<LocationCards className = "card-container"
                key = {oneLocation.id} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div></>;
}

export default Home;
