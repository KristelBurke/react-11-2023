import React, { useState} from 'react';
import tootajadFailist from "../data/tootajad.json";

function Kontakt() {
    const [tootajad, uuendaTootajad] = useState(tootajadFailist);

    const sorteeriAZ = () => {
        tootajad.sort((a, b) => a.localeCompare(b)); // a vordle b-ga
        uuendaTootajad(tootajad.slice());
    }

    const sorteeriZA = () => {
        tootajad.sort((a, b) => b.localeCompare(a)); // a vordle b-ga
        uuendaTootajad(tootajad.slice());
    }

    const nimePikkusKasvavalt = () => {
        tootajadFailist.sort((a, b) => a.length - b.length);
        uuendaTootajad(tootajadFailist.slice());
    }

    const nimePikkusKahanevalt = () => {
        tootajadFailist.sort((a, b) => b.length - a.length);
        uuendaTootajad(tootajadFailist.slice());
    }

    const sisaldavadLL = () => {
        const vastus = tootajad.filter(uksTootaja=> uksTootaja.includes("ll"));
        uuendaTootajad(vastus);
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = tootajad.filter(uksTootaja=> uksTootaja.endsWith("e"));
        uuendaTootajad(vastus);
    }

    return (
        <div>
            <br/>
            {tootajad.map(element => <div>{element}</div>)}
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={nimePikkusKasvavalt}>Nime pikkus kahanevalt</button>
            <button onClick={nimePikkusKahanevalt}>Nime pikkus kasvavalt</button>
            <button onClick={sisaldavadLL}>Sisaldab LL</button>
            <button onClick={filtreeriEgaLoppevad}>"e"-ga loppevad"</button>
        </div>
    )
}

export default Kontakt
