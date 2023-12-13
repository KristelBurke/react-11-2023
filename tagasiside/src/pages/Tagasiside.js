import { useState, useRef } from 'react'

function Tagasiside() {
    const [tagasisided, maaraTagasisided] = useState (["Oli hea", "Huvitav", "Teistsugune", "Ponev"]);
    const tagasisidedRef = useRef();

    function kustuta(index) {
        tagasisided.splice(index, 1);
        maaraTagasisided(tagasisided.slice());
    }

    function lisaUusTagasiside() {
        tagasisided.push(tagasisidedRef.current.value);
        maaraTagasisided(tagasisided.slice());
    }

    return (
        <div>Tagasisided:
            {tagasisided.map((element, index) => 
            <div>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>x</button>
                </div>)} 
                <br/>
                <label>Lisa uus tagasiside: </label>
                <input ref={tagasisidedRef} type="text" />
                <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
        </div>
    )
}

export default Tagasiside
