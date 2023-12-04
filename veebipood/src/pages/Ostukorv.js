import { Link } from "react-router-dom";
import { useState } from "react";

function Ostukorv() {
    const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite"]);

    const kustuta = () => {
        ostukorv.splice(0,1);
        uuendaOstukorv(ostukorv.slice());
    }

    return (
        <div>
            <br/>
            <button onClick={()=> uuendaOstukorv(["Coca", "Fanta", "Sprite"])}>Tagasi originaali </button>
            <button onClick={()=> uuendaOstukorv(["Coca", "Fanta"])}>Jata alles Coca ja Fanta</button>
            <button onClick={()=> uuendaOstukorv(["Sprite", "Fanta"])}>Jata alles Sprite ja Fanta </button>
            <button onClick={()=> uuendaOstukorv(["Coca", "Sprite"])}>Jata alles Coca ja Sprite </button>
            <button onClick={()=> uuendaOstukorv(["Coca"])}>Jata alles Coca </button>
            <button onClick={()=> uuendaOstukorv(["Fanta"])}>Jata alles Fanta</button>
            <button onClick={()=> uuendaOstukorv(["Sprite"])}>Jata alles Sprite </button>
            <button onClick={kustuta}>Kustuta esimene</button>
            
            <button onClick={()=> uuendaOstukorv([])}>Tuhjenda</button>

            {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} ese(t)</div>}

            {ostukorv.map( toode => 
                <div>
                    <span>{toode}</span>
                    <button>X</button>
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
