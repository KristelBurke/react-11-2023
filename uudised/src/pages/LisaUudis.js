import React, { useRef, useState } from 'react';

function LisaUudis() {
    const uudiseRef = useRef();
    const [sonum,uuendaSonum] = useState("");

    const lisaUusUudis = () => {
        const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
        uudised.push(uudiseRef.current.value);
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }

    const kontrolli = () => {
      uuendaSonum("");
      if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase()){
        uuendaSonum("Sisestasid uudise vaikese algustahega. Palun paranda!");
      }
      
      if (uudiseRef.current.value.includes("  ")) {
        uuendaSonum("Sisestasid kaks tuhikut. Palun paranda!");
      }
    }

  return (
    <div>
      <div>{sonum}</div>
        <br />
        <label>Uudise nimi</label><br />
        <input onChange={kontrolli} type="text" ref={uudiseRef} /><br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis