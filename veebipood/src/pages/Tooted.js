import React, {useState} from 'react'

function Tooted() {
    const [tooted, uuendaTooted] = useState(["Nobe", "Tesla", "BMW"]);

    const kustuta = (index) => {
        tooted.splice(index, 1);
        uuendaTooted(tooted.slice());
    }
    
    return (
        <div>
            <br/>
            {tooted.map((element, index) => 
            <div>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>
        )}
        </div>
    )
}

export default Tooted
