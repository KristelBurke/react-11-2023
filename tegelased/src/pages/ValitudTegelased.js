import React, { useState } from 'react'

function ValitudTegelased() {
    const [valitudTegelased, uuendaValitudTegelased] = useState(
        JSON.parse(localStorage.getItem("valitudTegelased")) || []);

    const eemalda = (index) => {
        valitudTegelased.splice(index,1);
        uuendaValitudTegelased(valitudTegelased.slice());
        localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased));
    }

    const tuhjenda = () => {
        uuendaValitudTegelased([]);
        localStorage.setItem("valitudTegelased", JSON.stringify([]));
    }
    return (
        <div>
            <br />
           {valitudTegelased.length > 0 && <button onClick={tuhjenda}>Tuhjenda</button>}<br /><br />
           {valitudTegelased.length > 0 && <div>Valitud on {valitudTegelased.length} tegelast</div>}
           {valitudTegelased.length === 0 && <div>Uhtegi tegelast pole valitud</div>}
           <br />
            {valitudTegelased.map((tegelane, index) => 
                <div>
                    <div>{tegelane.eesnimi}</div>
                    <div>{tegelane.perenimi}</div>
                    <div>{tegelane.elukoht}</div>
                    <div>{tegelane.vanus}</div>
                    <button onClick={() => eemalda(index)}>Eemalda</button><br />
                    <br />
                </div>)}
        </div>
    )
}

export default ValitudTegelased
