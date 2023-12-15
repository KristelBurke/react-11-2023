import React, { useState } from 'react';
import tootedFailist from "../data/tooted.json";
import ostukorvFailist from "../data/ostukorv.json";

// toodete esitamise leht
// saab tooteid ostukorvi panna

function Tooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);

    // siia teha toodete sorteerimine
    // a-z
    // z-a
    // tahed kasvavalt
    // tahed kahanevalt
    
    const lisaOstukorvi = (toode) => {
        // fail: ["Coca", "Fanta", "Sprite"]
        // fail.push( "red Bull") ----> ["Coca", "Fanta", "Sprite"]
        ostukorvFailist.push(toode);

    }
    return (
        <div>
            <br/>
            {tooted.map((element, index) => 
            <div>
                <span>{element}</span>
                <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>
        )}
        </div>
    )
}

export default Tooted
