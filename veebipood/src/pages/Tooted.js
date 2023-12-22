import React, { useState } from 'react';
import { Link } from "react-router-dom"
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";

// toodete esitamise leht
// saab tooteid ostukorvi panna

function Tooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);

    // siia teha toodete sorteerimine:
    // a-z
    const sorteeriAZ = () => {
        tooted.sort((a, b) => b.localeCompare(a)); // a vordle b-ga
        uuendaTooted(tooted.slice());
    }
    // z-a
    const sorteeriZA = () => {
        tooted.sort((a, b) => a.localeCompare(b)); // a vordle b-ga
        uuendaTooted(tooted.slice());
    }

    // tahed kasvavalt
    const sorteeriTahedKasvavalt = () => {
        // poed.sort();
        tooted.sort((a, b) => a.length - b.length);
        uuendaTooted(tooted.slice());
    }

    // tahed kahanevalt
    const sorteeriTahedKahanevalt = () => {
        // poed.sort();
        tooted.sort((a, b) => b.length - a.length);
        uuendaTooted(tooted.slice());
    }
    
    const lisaOstukorvi = (toode) => {
        // fail: ["Coca", "Fanta", "Sprite"]
        // fail.push("red Bull") ----> ["Coca", "Fanta", "Sprite"]
        ostukorvFailist.push(toode);
    }
    const NgaAlgavad = () => {
        const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
        uuendaTooted(vastus)

    }
    const BgaAlgavad = () => {
        const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
        uuendaTooted(vastus)
    }
    const TgaAlgavad = () => {
        const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
        uuendaTooted(vastus)
    }

    return (
        <div>
            <br/>
            {tooted.map((element, index) => 
            <div key={index}>
                <img className={element.aktiivne === true ? "pilt" : "pilt.mitte-aktiivne"}src={element.pilt} alt=""/>
                <span>{element.nimi} - {element.hind}€ </span>
                <br/>
                <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
                <Link to={"/toode/" + index}>
                    <button>Vaata lahemalt</button>
                </Link>
            </div>
        )}
        <br/>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri kahanevalt</button>
        <button onClick={NgaAlgavad}>N-ga algavad</button>
        <button onClick={BgaAlgavad}>B-ga algavad</button>
        <button onClick={TgaAlgavad}>T-ga algavad</button>
        <br />
        <br />
     </div>
    )
}

export default Tooted
