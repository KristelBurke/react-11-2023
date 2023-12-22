import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import YksikTagasisideAndja from "./pages/YksikTagasisideAndja";

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagsisidede lehele</button>
      </Link>

      <Link to="/tagasisideAndjad">
        <button>Vaata, kes on tagasisidet andnud</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <div>Tere</div> } />
        <Route path="/tagasiside" exact element={ <Tagasiside /> } />
        <Route path="/tagasisideAndjad" exact element={ <TagasisideAndjad /> } />
        <Route path="/yks-andja/:index" exact element={ <YksikTagasisideAndja /> } />
      </Routes>
        
    </div>
  );
}

export default App;
