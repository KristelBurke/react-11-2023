
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import HaldaUudiseid from './pages/HaldaUudiseid';
import UksUudis from './pages/UksUudis';
import MuudaUudis from './pages/MuudaUudis';
import KasutajaPostitus from './pages/KasutajaPostitus';
import UksPostitus from './pages/UksPostitus';

function App() {
  return (
    <div className='App' >
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
        <Route path="uudis/:index" element={ <UksUudis /> } />
        <Route path="muuda/:index" element={ <MuudaUudis /> } />
        <Route path="kasutaja-postitus/:kasutajaId" element={ <KasutajaPostitus /> } />
        <Route path="vaata-postitus/:postituseId" element={ <UksPostitus /> } />
       </Routes>
    </div>
  );
}

export default App;
