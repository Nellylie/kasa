import LocationCards from '../../components/locationcards/LocationCards';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import imgBannerHome from '../../media/image-banner-home.jpg';

function Home ({ data }) {
  const textContent = 'Chez vous, partout et ailleurs';

  console.log('DATATAT', data);

  return (<div><Banner imgSrc={imgBannerHome} textContent = {textContent}/>
  <div className='location-list'>
  {data && data.map((oneLocation, index) => (<LocationCards className = "card-container"
                key = {oneLocation.id + index} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div>
  <Footer/></div>);
}

export default Home;
