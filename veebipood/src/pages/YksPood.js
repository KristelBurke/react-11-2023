import React from 'react';
import { useParams } from 'react-router';
import poedFailist from "../data/poed.json"

function YksPood() {
    // useParams on URLi seest muutujate kätte saamiseks
    // loogeliste sulgude sisse tuleb kirjutada täpselt sama
    //  muutuja nagu läks URLi App.js seest (kooloni järgne sõna)
    const { index } = useParams();

    // õige poe otsimiseks
    // ["Ülemiste", "Viimsi", "Vesse"][0] -> "Ülemiste"
    // ["Ülemiste", "Viimsi", "Vesse"][1] -> "Viimsi"
    // ["Ülemiste", "Viimsi", "Vesse"][2] -> "Vesse"
    // ["Ülemiste", "Viimsi", "Vesse"]["Google"] -> undefined
    const leitud = poedFailist[index];

    if (leitud === undefined) {
        return <div>Poodi ei leitud</div>
    }

    return (
        <div>
            <br/>
            <div>Poe jarjekorranumber: {index}</div>
            <div>Poe nimetus: {leitud.nimi}</div>
            <div>Poe aadress: {leitud.aadress}</div>
            <div>Poe telefon: {leitud.tel}</div>
        </div>
    )
}

export default YksPood
