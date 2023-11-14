import React, { useState } from 'react'

function Kontakt() {
    const [naitaTelKristiine, muudaNaitaTelKristiine] = useState(false);
    const [naitaTelUlemiste, muudaNaitaTelUlemiste] = useState(false);
    const [naitaTelTasku, muudaNaitaTelTasku] = useState(false);

    return (
        <div>
            <div>See on avaleht, nahtav localhost:3000/kontakt aadressil</div>
            <div>Vota meiega uhendust</div>
            <br/>

            <div className={naitaTelKristiine === true ? "valitud" : undefined} onClick={() => muudaNaitaTelKristiine(!naitaTelKristiine)}>
                Kristiine keskus
             </div>
            {naitaTelKristiine && <div className="valitud">+372123123</div>}
            <div className={naitaTelKristiine === true ? "valitud" : undefined}>Endla 45, Tallinn</div>
            <br/>

            <div className={naitaTelUlemiste === true ? "valitud" : undefined} onClick={() => muudaNaitaTelUlemiste(!naitaTelUlemiste)}>
                Ulemiste keskus
                </div>
            {naitaTelUlemiste && <div className="valitud">+382123123</div>}
            <div className={naitaTelUlemiste === true ? "valitud" : undefined}>Suur-Sojamae 4, Tallinn</div>
            <br/>

            <div className={naitaTelTasku === true ? "valitud" : undefined} onClick={() => muudaNaitaTelTasku(!naitaTelTasku)}>
                Tasku keskus
                </div>
            {naitaTelTasku && <div className="valitud">+392123123</div>}
            <div className={naitaTelTasku === true ? "valitud" : undefined}>Turu 2, Tartu</div>

        </div>
    )
}

export default Kontakt
