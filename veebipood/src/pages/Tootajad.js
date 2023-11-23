import React from 'react'

function Tootajad() {
    const tootajad = ["Pille", "Kalle", "Malle", "Sille"];

    return (
        <div>
            {tootajad.map(element => <button>{element}</button>)}
        </div>
    )
}

export default Tootajad
