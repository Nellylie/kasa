import LocationCards from '../components/LocationCards'

function Home ({ locations }) {
  return <>
  <div className='location-card'>
  {locations.map((oneLocation) => (<LocationCards
                key={oneLocation.id} id={oneLocation.id} title={oneLocation.title} cover={oneLocation.cover}
            />))}
  </div></>
}

export default Home
