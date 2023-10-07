import LocationCards from '../../components/locationcards/LocationCards';
import Banner from '../../components/banner/Banner';
import imgBannerHome from '../../media/image-banner-home.jpg';
// affichage de la page "Home" avec le composant "Banner" et le composant "LocationCards"
function Home ({ data }) {
  const textContent = 'Chez vous, partout et ailleurs';

  // "data" est un tableau qui contient les données pour le composant "LocationCards" communiquées dans les props "id", "title" et "cover"
  return (<div className="main-container"><Banner imgSrc={imgBannerHome} textContent = {textContent}/>
  <div className='location-list'>
  {data && data.map((oneLocation, index) => (<LocationCards className = "card-container"
                key = {oneLocation.id + index} id = {oneLocation.id} title = {oneLocation.title} cover = {oneLocation.cover}
            />))}
  </div>
</div>);
}

export default Home;
