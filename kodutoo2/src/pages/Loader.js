import React, {useState} from 'react'

function Loader() {
    const [kasLaeb, uuendaLaadimist] = useState(true);
    return (
        <div>
            { kasLaeb === true && <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
            <button onClick={() => uuendaLaadimist(false)}>Lopeta laadimine</button>
        </div>
    )
}

export default Loader
