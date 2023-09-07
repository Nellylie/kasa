function Gallery ({ pictures }) {
  return <div>{ pictures ? <img src = {pictures[0]} /> : console.log(null) }
  </div>;
}

export default Gallery;
