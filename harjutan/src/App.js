import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Avaleht from "./pages/Avaleht";
import Kogus from "./pages/Kogus";
import Toggle from "./pages/Toggle";
import Color from "./pages/Color";
import Visible from "./pages/Visible";
import LikeCount from "./pages/LikeCount";
import Arrays from "./pages/Arrays";





function App() {
  return (
    <div className="App">

      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/kogus">
        <button>Kogus</button>
      </Link>

      <Link to="/toggle">
        <button>Toggle</button>
      </Link>

      <Link to="/color">
        <button>Color</button>
      </Link>

      <Link to="/visible">
        <button>Visible</button>
      </Link>

      <Link to="/likecount">
        <button>LikeCount</button>
      </Link>

      <Link to="/arrays">
        <button>Arrays</button>
      </Link>

      <Routes> 
        <Route path="/" exact element={ <Avaleht/> }/>
        <Route path="/kogus" exact element={ <Kogus/> }/>
        <Route path="/toggle" exact element={ <Toggle/> }/>
        <Route path="/color" exact element={ <Color/> }/>
        <Route path="/visible" exact element={ <Visible/> }/>
        <Route path="/likecount" exact element={ <LikeCount/> }/>
        <Route path="/arrays" exact element={ <Arrays/> }/>
      </Routes>
  
    </div>
  );
}

export default App;
