import './sass/main.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Header from './components/header/Header';
function App () {
  return <>
  <Header/>

 <Routes>
          <Route element={<Navigate replace to="/accueil" />} path="/" />
          <Route path="/accueil" element={<Home />}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/error" element= {<Error/>}/>
          <Route path="/*" element= {<Error/>}/>
        </Routes>;
  </>;
}

export default App;
