import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Gallery from '../../components/gallery/Gallery';
import Error from '../../pages/error/Error';
import Collapse from '../../components/collapse/Collapse';

function LocationSelected ({ data }) {
  const range = [1, 2, 3, 4, 5];
  const { locationId } = useParams();
  const [dataSelected, setDataSelected] = useState([]);
  console.log('datahom', data, 'dataselehome', dataSelected, 'usepara', locationId);

  useEffect(() => {
    (setDataSelected(data?.find((accomodation) => accomodation?.id === locationId)));
  },
  [locationId, dataSelected, data, setDataSelected]);

  return <div>{locationId
    ? (
    <main className = "main-accomodation">
        {/* <Gallery pictures = { dataSelected?.pictures }/> */}
        <div className="head-accomodation">
        <div className = "contain-accomodation">
          <div className ="title">{dataSelected?.title}</div>
          <div className="location">{dataSelected?.location}</div>
          <div className="tags-parent">{dataSelected?.tags?.map((tag, i) => (
      <div key={tag + i} className="tag"><p>{tag}</p></div>))}
      </div>
        </div>

        <div className="host-head">
          <figure className="host-description">
          <figcaption className="host-name">{dataSelected?.host?.name}</figcaption>
          <img className = "host-avatar" src={dataSelected?.host?.picture} alt="hôte"/>
          </figure>

          <div className="stars">{range.map((rate) => (
            dataSelected?.rating >= rate
              ? (<div key={rate}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#FF6060"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></div>
                )
              : (<div key={rate}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="grey"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></div>)))}</div>
        </div>
        </div>

        <div className="collapse-parent">
        <Collapse title = "Description" description = { dataSelected?.description } />
        <Collapse title = "Equipement" description = { dataSelected?.equipments } />
        </div>
      </main>)
    : (
      <Error/>)}</div>;
}

export default LocationSelected;
