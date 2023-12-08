import React, { useState, useRef } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
    const [poed, uuendaPoed] = useState( poedFailist);

    const originaali = () => {
        uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
        // poed.sort();
        poed.sort((a, b) => a.localeCompare(b)); // a vordle b-ga
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
        poed.sort((a, b) => b.localeCompare(a));
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKasvavalt = () => {
        // poed.sort();
        poed.sort((a, b) => a.length - b.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        // poed.sort();
        poed.sort((a, b) => b.length - a.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmandaTaheJargi = () => {
        // poed.sort();
        poed.sort((a, b) => a[2].localeCompare(b[2]));
        uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(uksPood=> uksPood.endsWith("e"));
        uuendaPoed(vastus);
    }

    const filtreeriIsSisaldavad = () => {
        const vastus = poed.filter(uksPood=> uksPood.includes("is"));
        uuendaPoed(vastus);
    }

    const filtreeriKellelOn7Tahte = () => {
        const vastus = poed.filter(uksPood=> uksPood.length >= 7);
        uuendaPoed(vastus);
    }

    const filtreeriKellelOn9Tahte = () => {
        const vastus = poed.filter(uksPood=> uksPood.length >= 9);
        uuendaPoed(vastus);
    }

    const filtreeriKolmasTahtI = () => {
        //const vastus = poed.filter(uksPood => uksPood[2] === "i");
        const vastus = poed.filter(uksPood => uksPood.charAt(2) === "i"); // character At
        uuendaPoed(vastus);
    }

    const poodRef = useRef();

    const lisa = () => {
        poed.push(poodRef.current.value);
        uuendaPoed(poed.slice());
    }

    return (
        <div>
            {poed.map(element => <div>{element}</div>)}
            <br/>
            <button onClick={sorteeriAZ}>Sorteeri A-Z </button>
            <button onClick={sorteeriZA}>Sorteeri Z-A </button>
            <button onClick={sorteeriTahedKasvavalt}>Sorteeri tahtede arvu jargi kasvavalt </button>
            <button onClick={sorteeriTahedKahanevalt}>Sorteeri tahtede arvu jargi kahanevalt </button>
            <button onClick={sorteeriKolmandaTaheJargi}>Sorteeri kolmanda tahe jargi </button>
            <button onClick={filtreeriEgaLoppevad}>Jata alles 'e'-ga loppevad </button>
            <button onClick={filtreeriIsSisaldavad}>Jata alles 'is' sisaldavad </button>
            <button onClick={filtreeriKellelOn7Tahte}>Jata alles 7 tahega </button>
            <button onClick={filtreeriKellelOn9Tahte}>Jata alles 9 tahega </button>
            <button onClick={filtreeriKolmasTahtI}>Jata alles kolmas taht 'i' </button>
            <button onClick={originaali}>Tagasi originaali </button>
            <br/>
            <br/>
            
            <label>Poe nimi</label><br/>
            <input ref={poodRef} type="text"/><br/>
            <button onClick={lisa}>Sisesta</button><br/>
            <br/>
        </div>
    )
}
export default Poed;