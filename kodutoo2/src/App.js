import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import Avaleht from "./pages/Avaleht";
import Meist from "./pages/Meist";
import Kontakt from "./pages/Kontakt";
import Seaded from "./pages/Seaded";
import { useState } from "react";
import { useRef} from "react";


function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123"){
      muudaSisselogitud("jah");
      muudaSonum("Kristel, oled sisse logitud");
    } else {
      muudaSonum("Vale parool");
    }
  }
  const logiValja = () => {
      muudaSisselogitud("ei");
      muudaSonum ("Kristel, oled valja logitud!");
    }


  return (
    <div className="App">
      <div>{ sonum }</div>
    { sisselogitud === "ei" && <div>
      <label>Kasutajanimi</label> <br/>
      <input ref={kasutajaNimiRef} type="text"/>
      <br/>
      <label>Parool</label> <br/>
      <input ref={paroolRef} type="password"/><br/>
    </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi valja</button> }

      <div>--SIIN ON VARASEM KODUTOO--</div>

      <Link to="/">
        <button>Avalehele</button>
      </Link>

      <Link to="/meist">
        <button>Meist</button>
      </Link>

      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>

      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <Avaleht/>} />
        <Route path="/meist" exact element={ <Meist/>} />
        <Route path="/kontakt" exact element={ <Kontakt/>} />
        <Route path="/seaded" exact element={ <Seaded/>} />
      </Routes>

    </div>
  );
}

export default App;
