import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Lisa from "./pages/LisaJook";
import Halda from "./pages/HaldaJooke";


function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa</button>
      </Link>

      <Link to="/halda">
        <button>Halda</button>
      </Link>

     <Routes>
        <Route path="" exact element={ <Avaleht/>} />
        <Route path="lisa" exact element={ <Lisa/>} />
        <Route path="halda" exact element={ <Halda/>} />
     </Routes>
    </div>
  );
}

export default App;
