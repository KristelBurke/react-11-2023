import React, { useRef, useState } from 'react'

function LisaToode() {
    const [sonum, maaraSonum] = useState("Lisa toode");
    const inputiLuger = useRef();

    function lisa() {
        if (inputiLuger.current.value === "") {
            maaraSonum("Tuhja nimetusega ei saa toodet lisada");

        } else {
            maaraSonum("Toode lisatud " + inputiLuger.current.value)
        }    
    }

    return (
        <div>
            <div>{sonum}</div>
            <label>Uus toode</label> <br/>
            <input ref={inputiLuger} type="text"/> 
            <br/>
            <button onClick={() => lisa()}>Sisesta</button> <br/>
        </div>
    )
}
// div, p, h1, h2, h3... <-- alati uuel real
// lubavad enda kõrvale: button, img, label, input, span, ....
// <br/> tekitab uue rea

export default LisaToode
