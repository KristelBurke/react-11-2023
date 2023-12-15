import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json";

// toodete haldamise leht
// saab tooteid kustutada ja muuta

function HaldaTooted() {
    const [tooted, uuendaTooted] = useState(tootedFailist);

    const kustuta = (index) => {
        tootedFailist.splice(index, 1);
        uuendaTooted(tootedFailist.slice());
    }
    
    return (
        <div>
            <br/>
            {tooted.map((element, index) => 
            <div>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>
        )}
        </div>
    )
}

export default HaldaTooted
