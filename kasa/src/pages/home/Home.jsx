import LocationCards from '../../components/locationcards/LocationCards';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import imgBannerHome from '../../media/image-banner-home.jpg';

function Home ({ locations }) {
  return <>
  <Banner imgSrc={imgBannerHome}/>
  <div className='location-list'>
  {locations.map((oneLocation) => (<LocationCards className = "card-container"
                key = {oneLocation.id} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div>
  <Footer/></>;
}

export default Home;
