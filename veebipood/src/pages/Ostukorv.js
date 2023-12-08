import { Link } from "react-router-dom";
import { useState } from "react";

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

    const kustuta = (mitmes) => {
        ostukorv.splice(mitmes,1);
        uuendaOstukorv(ostukorv.slice());
    }

    return (
        <div>
            <br/>
            <button onClick={() => uuendaOstukorv(["Coca", "Fanta", "Sprite"])}>Tagasi originaali </button>
            <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])}>Jata alles Coca ja Fanta</button>
            <button onClick={() => uuendaOstukorv(["Sprite", "Fanta"])}>Jata alles Sprite ja Fanta </button>
            <button onClick={() => uuendaOstukorv(["Coca", "Sprite"])}>Jata alles Coca ja Sprite </button>
            <button onClick={() => uuendaOstukorv(["Coca"])}>Jata alles Coca </button>
            <button onClick={() => uuendaOstukorv(["Fanta"])}>Jata alles Fanta</button>
            <button onClick={() => uuendaOstukorv(["Sprite"])}>Jata alles Sprite </button>
            <button onClick={() => kustuta(0)}>Kustuta esimene</button>
            <button onClick={() => kustuta(1)}>Kustuta teine</button>
            <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
            
            <button onClick={()=> uuendaOstukorv([])}>Tuhjenda</button>

            {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} ese(t)</div>}

            {ostukorv.map((toode, jrkrn) => 
                <div>
                    <span>{toode}</span>
                    <button onClick={() => kustuta(jrkrn)}>X</button>
                </div> 
                )}

            {ostukorv.length === 0 && 
                <div>
                    <div>Ostukorv on tuhi</div>
                    <Link to="/avaleht">
                        <button>Avalehele</button>
                    </Link>
                </div>
            }

        </div>
    )
}

export default Ostukorv
