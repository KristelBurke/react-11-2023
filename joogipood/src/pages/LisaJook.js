import React, { useRef } from 'react'
import joogidFailist from "../joogid.json"

function LisaJook() {
  const jookRef = useRef();
   
function lisaUusJook() {
    joogidFailist.push(jookRef.current.value);
}

return (
     <div>
         <br/>
        <label>Lisa uus jook</label>
        <input ref={jookRef} type="text"/>
        <button onClick={() => lisaUusJook()}>Sisesta</button>
    </div>
 )
}

export default LisaJook
