import {useState} from 'react'

function Meist() {
    const [ kontakt, naitaKontakt] = useState("");
    return (
        <div>
            <div>See on meist leht, nahtav localhost:3000/meist aadressil</div>
            <div>Meie tootajad</div>
            <br/>

            <div>Mari Maasikas</div>
            <div>Uudised</div>
            <button onClick={() => naitaKontakt("+362123123")}>Vota uhendust</button>
            <br/>

            <br/>
            <div>Virve Vihmavari</div>
            <div>Kujundus</div>
            <button onClick={() => naitaKontakt("+372123123")}>Vota uhendust</button>
            <br/>

            <br/>
            <div>Hunt Kriimsilm</div>
            <div>Reporter</div>
            <button onClick={() => naitaKontakt("+382123123")}>Vota uhendust</button>
            <br/>

            <br/>
            <div>Kalle Kaalikas</div>
            <div>Valisuudised</div>
            <button onClick={() => naitaKontakt("+392123123")}>Vota uhendust</button>
            <br/>
            <br/>
           { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
        </div>
    )
}

export default Meist
