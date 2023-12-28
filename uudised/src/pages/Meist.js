import { useState } from 'react';

function Meist() {
    const [ kontakt, naitaKontakt] = useState("");
    const tootajad = [
        {nimi: "Mari Maasikas", ala: "Uudised", telefon: "352123121"},
        {nimi: "Virve Vihmavari", ala: "Kujundus", telefon: "+36212312"},
        {nimi: "Hunt Kriimsilm", ala: "Reporter", telefon: "372123123"},
        {nimi: "Kalle Kaalikas", ala: "Valisuudised", telefon: "382123124"},
        {nimi: "Kati Karu", ala: "Muusika", telefon: "392123125"}
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
