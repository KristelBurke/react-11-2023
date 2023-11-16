import { useState } from 'react'

function Kontakt() {
    const [naitaTelKristiine, muudaNaitaTelKristiine] = useState(false);
    const [naitaTelUlemiste, muudaNaitaTelUlemiste] = useState(false);
    const [naitaTelTasku, muudaNaitaTelTasku] = useState(false);


    return (
        <div>
            <div>See on kontaktide leht, nahtav localhost:3000/kontakt aadressil</div>
            <div>Vota meiega uhendust</div>
            <br/>

            <div onClick={() => muudaNaitaTelKristiine(!naitaTelKristiine)}>Kristiine keskus </div>
            { naitaTelKristiine && <div>+372123123</div>}
            <div>Endla 45, Tallinn</div>
            <br/>

            <div onClick={() => muudaNaitaTelUlemiste (!naitaTelUlemiste)}> Ulemiste keskus</div>
            { naitaTelUlemiste && <div>+382123123</div>}
            <div >Suur-Sojamae 4, Tallinn</div>
            <br/>

            <div onClick={() => muudaNaitaTelTasku (!naitaTelTasku)}>Tasku keskus</div>
            { naitaTelTasku && <div >+392123123</div>}
            <div >Turu 2, Tartu</div>

        </div>
    )
}

export default Kontakt
