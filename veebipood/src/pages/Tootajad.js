import React, { useState, useRef } from 'react';
import tootajadFailist from "../data/tootajad.json";

function Tootajad() {
    const [tootajad, uuendaTootajad] = useState(tootajadFailist);
    const tootajaRef =useRef();

    const kustuta = (i)=> {
        tootajad.splice(i, 1);
        uuendaTootajad(tootajad.slice());
    }

    const lisa =() => {
        tootajad.push(tootajaRef.current.value);
        uuendaTootajad(tootajad.slice());
    }

    return (
        <div>
            <br/>
            <label>Tootaja nimi</label><br/>
            <input ref={tootajaRef} type="text"/><br/>
            <button onClick={lisa}>Sisesta</button><br/>
            <br/>

            {tootajad.map((element, index) => 
            <button key={index} onClick={() => kustuta(index)}>{element}</button>
            )}
        </div>
    )
}

export default Tootajad

  // Array (Massiiv, List) väljakuvamiseks on vaja see muutuja, mille sees on Array
  // (tema väärtus on kandilisest sulust kandilise suluni)
  // .map() abil, mille panen muutuja lõppu, loogeliste sulgude sisse
  // {MUUTUJA.map()}
  // .map() on tsükkel ehk käiakse ükshaaval läbi kõik väärtused mis asuvad Array sees
  // .map(muutuja => )
  // muutuja sisse tekib ükshaaval Array ühe elemendi väärtus
  // {tootajad.map(element => <button>{element}</button>)}
  // ["Pille", "Kalle", "Malle", "Sille"].map("Pille" => <button>Pille</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Kalle" => <button>Kalle</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Malle" => <button>Malle</button> )
  // ["Pille", "Kalle", "Malle", "Sille"].map("Sille" => <button>Sille</button> )