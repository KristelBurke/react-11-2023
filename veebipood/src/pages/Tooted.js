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

    return (
        <div>
            <br/>
            {tooted.map((element, index) => 
            <div>
                <span>{element}</span>
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

        </div>
    )
}

export default Tooted
