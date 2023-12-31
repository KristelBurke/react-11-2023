import React, { useState } from 'react'

// div ja span on tühjused, aga div teeb uue rea, span ei tee

// tumesinine - JavaScriptis sissekirjutatud sõnad: function, const, false, true, undefined
//  Liigitus     HTMLs elementide tagi nimetused: div, img, button, input, label
// tavaline sinine - muutujad JS + HTMLs. Need on meie poolt välja mõeldud sõnad
// helesinine - omadus JS + HTMLs. className, src, alt, onClick, disabled
//              JavaScriptis: .current.value
// kollane - funktsioonid, JS + HTMLs
// roheline - kommentaar
// lilla - käsklus. import, export, return, if / else
// valge - märgid, HTMLs väljakuvatav tekst
// oranž - tekst
// heleroheline - number
// {{{{{{{{{{{{{{[[[(((())))]]]}}}}}}}}}}}}}}

function Avaleht() {
    // nii kui tahan midagi HTMLs muuta, ilma et muutuks URL, siis PEAN kasutama useState
  
  // vasakpoolsed muutujad on HTMLs
  //  kui ma vasakpoolseid muutujaid HTMLs ei kasuta, siis pole vaja useState teha
  // parempoolsed on funktsioonid, mis uuendavad seda muutujat
  //  uuendus toimub läbi sulgude seest antava uue väärtuse
  //  alati peab selleks toimuma mingi sündmus (klikk, klahvivajutus, hiire liikumine)

  // useState võrdusmärgist vasakul pool on alati 2 asja -> muutuja + funktsioon sulgude vahel
  //  kandilised sulud tähendavad, et TÄPSELT 2 asja 
  //        (loogelised sulud {} tähendaksid, et võib olla rohkem või vähem)

  // useState peab alati olema imporditud ja useState sulgude sees anname esialgse väärtuse 
  // (mis tuleb alati tagasi kui refresh tehakse või lehelt ära minnakse ja tagasi tullakse)


    const [kogus, uuendaKogus] = useState( Number(localStorage.getItem("kogus")) );
    const [laigitud, muudaLaigitud] = useState (false) ; // 0  - mittelaigitud, 1- laigitud
    const [sonum, uuendaSonum] = useState ("uuenda kogust!");

    const nulli = () => {
        uuendaKogus(0);
        uuendaSonum("Nullitud!");
        localStorage.setItem("kogus", 0);
    }

    const vahenda = () => {
        uuendaKogus (kogus - 1);
        uuendaSonum("Vähendatud!");
        localStorage.setItem("kogus", kogus - 1);
    }

    const suurenda = () => {
        uuendaKogus (kogus + 1);
        uuendaSonum("Suurendatud!");
        localStorage.setItem("kogus", kogus + 1);
    }
    
    return (
        <div>
            <div>{sonum}</div>
            {laigitud === false && <img src="/mittelaigitud.svg" alt=""/>}
            {laigitud === true && <img src="/laigitud.svg" alt=""/>}
            {kogus > 10 && <img src="/kuldne.svg" alt=""/>}
            <button onClick={() => muudaLaigitud (true)}>Pane laigituks</button>
            <button onClick={() => muudaLaigitud (false)}>Pane mittelaigituks</button>
            <br/> 


            <br/>
            {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>}
            <br/>
            {<button disabled={kogus === 0} onClick={vahenda}>-</button>}
            <span className={kogus > 10 ? "kuldne" : undefined} >{kogus}</span>
            <button onClick={suurenda}>+</button>
        </div>
    )
}

export default Avaleht
