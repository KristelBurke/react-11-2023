import React from 'react';
import { useParams } from 'react-router';
import tootedFailist from '../data/tooted.json'


function YksToode() {
    const { index } = useParams();
    const leitud = tootedFailist[index];

    if (leitud === undefined) {
        return <div>Toodet ei leitud</div>
    }

    return (
        <div>
            <br/>
            <img src="" alt=""/>
            <div>Jarjekorranumber: {index}</div>
            <div>Nimi: {leitud}</div>
            <div>Hind: </div>
            <div>Aktiivne: </div>
        </div>
    )
}

export default YksToode

// mis need use-d on (Hookid)
// Hookid on Reacti erikood, mis tuleb importida
// useState, useRef - import from 'react'
// useParams - import from 'react-router-dom'
// Hookide reeglid:
// 1. algavad use eesliidesega
// 2. alati peab importima
// 3. alati lõppeb sulgudega
// 4. teda ei tohi panna funktsiooni sisse ehk korduvalt teda teha
// 5. teda ei tohi luua ka tingimuslikult

// miks {} vs []   const [] = useState()    const {} = useParams()
// [] <--- täpselt nii palju arv muutujaid kui on Reacti poolt ette antud
// useState-l on ette antud, et peab olema täpselt 2tk: muutuja, muutja
// {} <--- ükskõik kui palju või vähe