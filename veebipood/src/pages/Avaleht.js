import React, { useState } from 'react'

// div ja span on tühjused, aga div teeb uue rea, span ei tee

function Avaleht() {
    const [kogus, uuendaKogus] = useState (7);
    const [laigitud, muudaLaigitud] = useState (false) ; // 0  - mittelaigitud, 1- laigitud
    const [sonum, uuendaSonum] = useState ("uuenda kogust!");

    const nulli = () => {
        uuendaKogus(0);
        uuendaSonum("Nullitud!");
    }

    const vahenda = () => {
        uuendaKogus (kogus - 1);
        uuendaSonum("Vähendatud!");
    }

    const suurenda = () => {
        uuendaKogus (kogus + 1);
        uuendaSonum("Suurendatud!");
    }

    
    return (
        <div>
            <div>{sonum}</div>
            {laigitud === false && <img src="/mittelaigitud.svg" alt=""/>}
            {laigitud === true && <img src="/laigitud.svg" alt=""/>}
            {kogus > 10 && <img src="/kuldne.svg" alt=""/>}
            <button onClick={() => muudaLaigitud (true)}>Pane laigituks</button>
            <button onClick={() => muudaLaigitud (false)}>Pane mittelaigituks</button>
            <br/> 


            <br/>
            {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
            <br/>
            {<button disabled={kogus === 0} onClick={vahenda}>-</button>}
            <span>{kogus}</span>
            <button onClick={suurenda}>+</button>
        </div>
    )
}

export default Avaleht
