import React, { useState, useRef } from 'react';
import andjateFail from "../nimed.json";

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);

    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith('M'));
        uuendaAndjad(vastus);
    }

    const filter6Letters = () => {
        const vastus = andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }

    const filterEndingY = () => {
        const vastus = andjad.filter(element => element.endsWith('y'));
        uuendaAndjad(vastus);
    }

    const sorteeriAZ = () => {
        andjad.sort((a, b) => a.localeCompare(b));
        uuendaAndjad(andjad.slice());
    }

    const sorteeriZA = () => {
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }

    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element);
        uuendaAndjad(vastus)
    }

    const kustuta = (index) => {
        andjad.splice(index, 1);
        uuendaAndjad(andjad.slice());
    }

    const andjadRef = useRef();

    const lisa = () => {
        andjad.push(andjadRef.current.value);
        uuendaAndjad(andjad.slice());
    }

    return (
        <div>
            <br/>
            {andjad.length > 0 && <div>Nimekirjas on: {andjad.length} nime</div>}
            
            <button onClick={filtreeriM}>M-tahega algavad</button>
            <button onClick={filter6Letters}>6-kohalised nimed</button>
            <button onClick={filterEndingY}>Y-tahega loppevad</button>
            <br/>
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A </button>
            <button onClick={insertEST}>Kirjuta iga nime ette "EST-"</button>
            {andjad.map((element, index) => 
                <div key={element}>
                    {element} <button onClick = {() => kustuta(index)}>x</button>
                    </div>)}
                    <br/>
            <label>Lisa uus nimi</label> <br/>
            <input ref={andjadRef} type="text"/><br/>
            <button onClick={lisa}>Lisa</button>
            <br/>
            <br/>
        </div>
    );
}

export default TagasisideAndjad
