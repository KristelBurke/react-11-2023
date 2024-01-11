
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';

function App() {
  return (
    <div >
      <Link to="/">
         <button>Avalehele</button>
       </Link>

       <Link to="/uudised">
         <button>Uudiste lehele</button>
       </Link>

       <Link to="/kontakt">
         <button>Vota meiega uhendust</button>
       </Link>

       <Link to="/meist">
         <button>Meist</button>
       </Link>

       <Link to="/lisa-uudis">
         <button>Lisa uudis</button>
       </Link>

       <Link to="/halda">
         <button>Halda uudiseid</button>
       </Link>


       <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="uudised" element={ <Uudised /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="lisa-uudis" element={ <LisaUudis/> } />
        <Route path="halda" element={ <HaldaUudiseid /> } />
       </Routes>
    </div>
  );
}

export default App;
