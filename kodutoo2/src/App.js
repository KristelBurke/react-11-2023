import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import { useState } from "react";
import { useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import Avaleht from "./pages/Avaleht";
import Meist from "./pages/Meist";
import Kontakt from "./pages/Kontakt";
import Seaded from "./pages/Seaded";
import Loader from "./pages/Loader";
import Leht from "./pages/Leht";
import Logimine from "./pages/Logimine";
import Months from "./pages/Months";
import Animals from "./pages/Animals";
import Words from "./pages/Words";
import Books from "./pages/Books";
import Numbrid from "./pages/Numbrid";




function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
        if (paroolRef.current.value === "Kristel123%"){
          muudaSisselogitud("jah");
          muudaSonum(kasutajaNimiRef.current.value + ", oled sisse logitud!");
          toast.success(kasutajaNimiRef.current.value + ", oled sisse logitud!");
        return;
        }
        if (paroolRef.current.value.length < 8 ){
          toast.error("Parool liiga luhike")
        return;
        }
        if (paroolRef.current.value.toLowerCase() === paroolRef.current.value ){
          toast.error("Parool peab sisaldama suurt tahte")
        return;
        }
        if (paroolRef.current.value.toUpperCase() === paroolRef.current.value ){
          toast.error("Parool peab sisaldama vaikest tahte")
        return;
        }
        if (paroolRef.current.value.includes("%") === false ){
          toast.error("Parool peab sisaldama %")
        return;
        }

        toast.error("Vale parool");
        muudaSonum("Vale parool");
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
        <button>Seadetesse</button>
      </Link>

      <Link to="/loader">
        <button>Loader</button>
      </Link>

      <Link to="/leht">
        <button>Leht</button>
      </Link> 

      <Link to="/logimine">
        <button>Logimine</button>
      </Link>

      <Link to="/months">
        <button>Months</button>
      </Link>

      <Link to="/animals">
        <button>Animals</button>
      </Link>

      <Link to="/words">
        <button>Words</button>
      </Link>

      <Link to="/books">
        <button>Books</button>
      </Link>

      <Link to="/numbrid">
        <button>Numbrid</button>
      </Link>

      <Routes>
        <Route path="/" exact element={ <Avaleht/>} />
        <Route path="/meist" exact element={ <Meist/>} />
        <Route path="/kontakt" exact element={ <Kontakt/>} />
        <Route path="/seaded" exact element={ <Seaded/>} />
        <Route path="/loader" exact element={ <Loader/>} />
        <Route path="/leht" exact element={ <Leht/>} />
        <Route path="/logimine" exact element={ <Logimine/>} />
        <Route path="/months" exact element={ <Months/>} />
        <Route path="/animals" exact element={ <Animals/>} />
        <Route path="/words" exact element={ <Words/>} />
        <Route path="/books" exact element={ <Books/>} />
        <Route path="/numbrid" exact element={ <Numbrid/>} />
      </Routes>
      
      <ToastContainer
       position="top-right"
       theme="dark"/>
    </div>
  );
}

export default App;
