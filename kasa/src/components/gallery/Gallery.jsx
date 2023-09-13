import { useState } from 'react';

function Gallery ({ pictures }) {
  const [index, setIndex] = useState(0);
  console.log(index);
  const navigate = (direction) => {
    if (direction === 'next') {
      const newIndex = index === pictures.length - 1 ? 0 : index + 1;
      setIndex(newIndex);
    } else {
      const newIndex = index === 0 ? pictures.length - 1 : index - 1;
      setIndex(newIndex);
    }
  };

  return <div className="gallery">
      {pictures && (<img src={pictures[index]} />)}
      { pictures.length > 1 && (
           <div className="navigate"><div className="chevron-left" onClick={() => navigate('prev')}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="rgb(255,255,255)" /></svg>
      </div><div className="chevron-right" onClick={() => navigate('next')}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="rgb(255,255,255)" /></svg>
        </div><div className="number">{index + 1} / {pictures.length}</div></div>)}
    </div>;
}

export default Gallery;
