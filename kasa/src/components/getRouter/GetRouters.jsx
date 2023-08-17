import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'

function GetRouter (props) {
  return <Routes>
          <Route path="/" element= {<Home locations = {props.locations}/>}/>
        </Routes>
}

export default GetRouter
