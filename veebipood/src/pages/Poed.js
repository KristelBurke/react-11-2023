import React, { useState } from 'react'
import poedFailist from "../data/poed.json";
import { Link } from 'react-router-dom';


function Poed() {
    const [poed, uuendaPoed] = useState( poedFailist);

    const originaali = () => {
        uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
        // poed.sort();
        poed.sort((a, b) => a.nimi.localeCompare(b.nimi)); // a vordle b-ga
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
        poed.sort((a, b) => b.nimi.localeCompare(a.nimi));
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKasvavalt = () => {
        // poed.sort();
        poed.sort((a, b) => a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriTahedKahanevalt = () => {
        // poed.sort();
        poed.sort((a, b) => b.nimi.length - a.nimi.length);
        uuendaPoed(poed.slice());
    }

    const sorteeriKolmandaTaheJargi = () => {
        // poed.sort();
        poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
        uuendaPoed(poed.slice());
    }

    const filtreeriEgaLoppevad = () => {
        const vastus = poed.filter(uksPood=> uksPood.nimi.endsWith("e"));
        uuendaPoed(vastus);
    }

    const filtreeriIsSisaldavad = () => {
        const vastus = poed.filter(uksPood=> uksPood.nimi.includes("is"));
        uuendaPoed(vastus);
    }

    const filtreeriKellelOn7Tahte = () => {
        const vastus = poed.filter(uksPood=> uksPood.nimi.length >= 7);
        uuendaPoed(vastus);
    }

    const filtreeriKellelOn9Tahte = () => {
        const vastus = poed.filter(uksPood=> uksPood.nimi.length >= 9);
        uuendaPoed(vastus);
    }

    const filtreeriKolmasTahtI = () => {
        //const vastus = poed.filter(uksPood => uksPood[2] === "i");
        const vastus = poed.filter(uksPood => uksPood.nimi.charAt(2) === "i"); // character At
        uuendaPoed(vastus);
    }

   

    return (
        <div>
            <br/>
            {poed.map((element, index) => 
                <div>
                    {element.nimi} - {element.aadress}
                    <Link to={"/pood/" + index}>
                        <button>Vaata lahemalt</button>
                    </Link>
                    
                </div>)}
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
            <button onClick={originaali}>Filtrid maha</button>
        </div>
    )
}
export default Poed;