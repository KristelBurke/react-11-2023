import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import LisaJook from "./pages/LisaJook";
import HaldaJooke from "./pages/HaldaJooke";


function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa jooke</button>
      </Link>

      <Link to="/halda">
        <button>Halda jooke</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <Avaleht/>}/>
        <Route path="/lisa" exact element={ <LisaJook/>}/>
        <Route path="/halda" exact element={ <HaldaJooke/>}/>
      </Routes>

    </div>
  );
}

export default App;
