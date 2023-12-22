import React, { useState, useRef } from 'react';
import poedFailist from "../data/poed.json";

function PoedHalda() {
    const [poed, uuendaPoed] = useState( poedFailist);

    const poodRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();

    const lisa = () => {
        const uusPood = {
            "nimi": poodRef.current.value,
            "tel": telefonRef.current.value, 
            "aadress": aadressRef.current.value
        };
        poedFailist.push(uusPood);
        uuendaPoed(poedFailist.slice());
    }

    const kustuta = (index) => {
        poedFailist.splice(index,1);
        uuendaPoed(poedFailist.slice());
    }
    return (
        <div >
            <label>Poe nimi</label><br/>
            <input ref={poodRef} type="text"/><br/>
            <label>Poe telefon</label><br/>
            <input ref={telefonRef} type="text"/><br/>
            <label>Poe aadress</label><br/>
            <input ref={aadressRef} type="text"/><br/>
            <button onClick={lisa}>Sisesta</button>
            <br/>
            <br/>
           {poed.map((element, index) => 
           <div key={index}>
               <div>{element.nimi}</div>
               <div>{element.aadress}</div>
               <div>{element.tel}</div>
               <button onClick={() => kustuta(index)}>x</button>
             </div>)
             }
        </div>
    )
}

export default PoedHalda
