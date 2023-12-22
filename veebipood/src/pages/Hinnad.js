import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hinnadFailist from "../data/hinnad.json";


function Hinnad() {
    const [hinnad, uuendaHinnad] = useState(hinnadFailist);

    const hindKasvavalt =() => {
        hinnad.sort((a,b) => a - b );
        uuendaHinnad(hinnad.slice());
    }

    const hindKahanevalt =() => {
        hinnad.sort((a,b) => b - a );
        uuendaHinnad(hinnad.slice());
    }
    const hindNaguSonaAZ =() => {
        hinnad.sort((a,b) => a.toString().localeCompare(b.toString()));
        uuendaHinnad(hinnad.slice());
    }

    const filtreeriVah50 = () => {
        const vastus = hinnad.filter(hind => hind >= 50);
        uuendaHinnad(vastus);
    }
    const filtreeriSisaldab5 = () => {
        const vastus = hinnad.filter(hind => hind.toString().includes("5"));
        uuendaHinnad(vastus);
    }

    const filtreeriAlgab1 = () => {
        const vastus = hinnad.filter(hind => hind.toString().startsWith("1"));
        uuendaHinnad(vastus);
    }


    return (
        <div>
          {hinnad.map((hind, index) =>
          <div>
              <Link to={"/hind/" + index + "/test/" + hind + "/test2"}>
              {hind}
              </Link>
              </div>
              )}
          <button onClick={hindKasvavalt}>Hind kasvavalt</button>
          <button onClick={hindKahanevalt}>Hind kahanevalt</button>
          <button onClick={hindNaguSonaAZ}>Hind a-z</button>
          <button onClick={filtreeriVah50}>Vahemalt 50</button>
          <button onClick={filtreeriSisaldab5}>Sisaldab 5</button>
          <button onClick={filtreeriAlgab1}>Algavad 1-ga</button>
        </div>
    )
}

export default Hinnad
