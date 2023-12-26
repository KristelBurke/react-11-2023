import { useState } from 'react';

function Meist() {
    const [ kontakt, naitaKontakt] = useState("");
    const tootajad = [
        {nimi: "Mari Maasika", ala: "Uudised", telefon: "362123121"},
        {nimi: "Virve Vihmavari", ala: "Kujundus", telefon: "+37212312"},
        {nimi: "Hunt Kriimsilm", ala: "Reporter", telefon: "382123123"},
        {nimi: "Kalle Kaalikas", ala: "Valisuudised", telefon: "392123124"},
    ]

    const [valitud, uuendaValitud] = useState();

    const votaUhendust = (tootaja) => {
        naitaKontakt(tootaja.telefon);
        uuendaValitud(tootaja.nimi);
    }

    return (
        <div>
            <div>See on meist leht, nahtav localhost:3000/meist aadressil</div>
            <br />
            <div>Meie tootajad</div>
            {/* VALITUD INIMENE: {valitud} */}
            <br/>
            <br />
            <div>
                {tootajad.map(tootaja =>
                <div className={tootaja.nimi === valitud ? 'valitud' : undefined}>
                    <div>{tootaja.nimi}</div>
                    <div>{tootaja.ala}</div>
                    <button onClick={() => votaUhendust(tootaja)}>Vota uhendust</button>
                    <br />
                    <br />
                </div>)}
            </div>
            <br/>
            <br/>
           { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
        </div>
    )
}

export default Meist
