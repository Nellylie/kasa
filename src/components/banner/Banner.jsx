function Banner ({ imgSrc }) {
  return <div className='banner'>
              <div className='slogan'>
                  <p>Chez vous, partout et ailleurs</p>
              </div>
              <img className= 'img-banner'
              src = { imgSrc }>
              </img>
          </div>;
}

export default Banner;
