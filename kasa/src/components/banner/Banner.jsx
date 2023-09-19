// "banner" est le composant qui affiche le titre de la page et l'image de fond
function Banner ({ imgSrc, textContent }) {
  return <div className='banner'>
        <div className='slogan'>
            <p>{textContent}</p>
        </div>
        <img className='img-banner'
            src={imgSrc}>
        </img>
    </div>;
}

export default Banner;
