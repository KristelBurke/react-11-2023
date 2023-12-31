
import './App.css';
import { Link, Route, Routes, } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaToode from "./pages/LisaToode";
import Ostukorv from "./pages/Ostukorv";
import Seaded from "./pages/Seaded";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Profiil from './pages/Profiil';
import Tootajad from './pages/Tootajad';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';
import Hinnad from './pages/Hinnad';
import HaldaTooted from './pages/HaldaTooted';
import PoedHalda from './pages/PoedHalda';
import Kontakt from './pages/Kontakt';
import YksPood from './pages/YksPood';
import YksToode from './pages/YksToode';
import YksikHind from './pages/YksikHind';
import YksTootaja from './pages/YksTootaja';
import MuudaToode from './pages/MuudaToode';

// kui impordin node_modules sees siis, kirjutan kohe kausta nime, kust võtan
// kui impordin meie failide seast (src kaustas olevatest), pean kirjutama algusesse "./" või "../"
//   .js failidele ei pea lõppu panema laiendit .js
//   teistele peab: .css   .svg    .json

function App() {

  const [kasTume, muudaTume] = useState(localStorage.getItem("kasTumeTeema") || "false");

  const muudaTumedaks = () => {
    muudaTume("true");
    localStorage.setItem("kasTumeTeema","true");
  }
  const muudaHeledaks = () => {
    muudaTume("false");
    localStorage.setItem("kasTumeTeema","false");
  }

  return (
    <div className={ kasTume === "true" ? "tume": "App"}>
      { kasTume === "false" && <img className="ikoon" onClick={muudaTumedaks} src="/tume.png" alt=""/>}
      { kasTume === "true" && <img className="ikoon"  onClick={muudaHeledaks} src="/hele.png" alt=""/>}
      {/* Link to="" suunab sinna URL-le mis on to="" jutumärkide sees */}
      <Link to="/avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt=""/>
      </Link>

      <Link to="/ostukorv">
        <button className="nupu-stiil">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupu-stiil">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupu-stiil">Seaded</button>
      </Link>

      <Link to="/profiil">
        <button className="nupu-stiil">Profiil</button>
      </Link>

      <Link to="/login">
        <button className="nupu-stiil">Login</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupu-stiil">Tootajad</button>
      </Link>

      <Link to="/tooted">
        <button className="nupu-stiil">Tooted</button>
      </Link>

      <Link to="/poed">
        <button className="nupu-stiil">Poed</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupu-stiil">Hinnad</button>
      </Link>

      <Link to="/halda">
        <button className="nupu-stiil">Halda Tooted</button>
      </Link>

      <Link to="/poedhalda">
        <button className="nupu-stiil">Halda poode</button>
      </Link>

      <Link to="/kontakt">
        <button className="nupu-stiil">Kontakt</button>
      </Link>

      <Routes>
        {/* siin on valiidsete URLde nimistu, path="" jutumärkide sees */}
        <Route path="avaleht" element={ <Avaleht/> } />
        <Route path="ostukorv" element={ <Ostukorv/> } />
        <Route path="lisa-toode" element={ <LisaToode/>  } />
        <Route path="seaded" element={ <Seaded/>  } />
        <Route path="profiil" element={ <Profiil/>  } />
        <Route path="login" element={<LogIn/>  } />
        <Route path="tootajad" element={<Tootajad/>  } />
        <Route path="tooted" element={<Tooted/>  } />
        <Route path="poed" element={<Poed/>  } />
        <Route path="hinnad" element={<Hinnad/>  } />
        <Route path="halda" element={<HaldaTooted/>  } />
        <Route path="poedhalda" element={<PoedHalda/>  } />
        <Route path="kontakt" element={ <Kontakt/>  } />
        <Route path="pood/:index" element={ <YksPood/>  } />
        <Route path="toode/:index" element={ <YksToode/>  } />
        <Route path="hind/:jrknr/test/:hind/test2" element={ <YksikHind/>  } />
        <Route path="tootaja/:index" element={ <YksTootaja/>  } />
        <Route path="muuda/:jrknr" element={ <MuudaToode/>  } />

        <Route path="*" element={ <NotFound/>  } />
      </Routes>

     {/* <div>FOOTER</div> */}
    </div>
  );
}

export default App;

// BAAS URL:    telia.ee    err.ee     localhost:3000
// path="" <-- mis järgneb baas url-le, 
// element loogeliste sulgude sees on kirjas mida näidatakse