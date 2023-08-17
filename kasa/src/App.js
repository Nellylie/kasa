import "./sass/main.scss";
import InitRouter from "./components/InitRouter/InitRouter";
import { useState, useEffect } from "react";
function App() {
  const urlJson = process.env.PUBLIC_URL + '/data/logements.json';
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetch(urlJson).then(
      function (response) {
        return response.json();
      }).then(function (urlJson) { return setLocations(urlJson); });
  }, []);

  return <><InitRouter locations = {locations}/></>;
}

export default App;
