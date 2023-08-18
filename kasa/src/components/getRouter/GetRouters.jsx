import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import LocationSelected from '../../pages/locationselected/LocationSelected';
function GetRouter (props) {
  return <Routes>
          <Route path="/" element= {<Home locations = {props.locations}/>}/>
          <Route path="/home/:id" element={<LocationSelected />} />
        </Routes>;
}

export default GetRouter;
