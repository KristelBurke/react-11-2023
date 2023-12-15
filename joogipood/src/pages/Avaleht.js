import React, { useState, useRef }  from 'react';
import joogidFailist from "../joogid.json";

function Avaleht() {
    const [joogid, uuendaJoogid] = useState(joogidFailist);
    const jookRef = useRef();

    const lisaUusJook = () =>{
        joogidFailist.push(jookRef.current.value);
        uuendaJoogid(joogidFailist.slice())
    }
    return (
    <div>
        <br/>
        {joogid.map((jook, index) => (
        <div key={index}>{jook}</div>
      ))}
      <br/>
        <label>Lisa uus jook</label> <br/>
        <input ref={jookRef} type="text"/>
        <button onClick={lisaUusJook}>Lisa</button>
    </div>
    )
}

export default Avaleht
