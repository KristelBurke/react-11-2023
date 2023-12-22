import React, { useState } from 'react'
import {Link } from "react-router-dom"
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
            <div className={element.aktiivne === true ? "aktiivne" : "mitte-aktiivne"} key={index}>
                <img className="pilt" src={element.pilt} alt=""/>
                <div>{element.nimi}</div>
                <div>{element.hind}</div>
                <div>{element.pilt}</div>
                <button onClick={() => kustuta(index)}>X</button>
                <Link to={"/muuda/" + index }>
                    <button>Muuda</button>
                </Link>
            </div>
        )}
        </div>
    )
}

export default HaldaTooted
