import React, { useState } from 'react'

function Hinnad() {
    const [hinnad, uuendaHinnad] = useState([4, 6, 12, 5, 45, 321, 55, 77, 8, 9, 111]);

    const hindKasvavalt =() => {
        hinnad.sort((a,b) => a - b );
        uuendaHinnad(hinnad.slice());
    }


    return (
        <div>
          {hinnad.map(hind => <div>{hind}</div>)}
          <button onClick={hindKasvavalt}>Hind kasvavalt</button>
        </div>
    )
}

export default Hinnad
