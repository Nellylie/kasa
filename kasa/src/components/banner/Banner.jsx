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
