import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import bannerAbout from '../../media/image-banner-about.jpg';
import dataAbout from './dataAbout.json';
// affichage de la page "About" avec le composant "Banner" et le composant "Collapse"
function About () {
  /* "dataAbout" est un tableau d'objets qui contient les données
pour le composant "Collapse" communiquées dans les props "title" et "description" */
  return <main className='about-section'>
        <Banner imgSrc ={bannerAbout} text="" />
        <div className="collapses-modules">
        {dataAbout.map((content) => (
            <Collapse key={content.title} title={content.title} description={content.description}/>
        ))}
        </div></main>;
}

export default About;
