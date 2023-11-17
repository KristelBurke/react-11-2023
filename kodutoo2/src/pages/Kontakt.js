import { useState } from 'react'

function Kontakt() {
    const [aadress, maaraAadress] = useState("Tallinn");
    const [telefon, maaraTelefon] = useState("55123456");
    const [email, maaraEmail] = useState ("tallinn@tallinn.com");
    const [ingliseKeelne, maaraIngliseKeelne] = useState("ei");

    const ingliseks = () => {
        maaraAadress("London");
        maaraTelefon("12312412");
        maaraEmail("london@london.com");
        maaraIngliseKeelne("jah");
    }

    return (
        <div>
            <div>{aadress}</div>
            <div>{telefon}</div>
            <div>{email}</div>
            <button onClick={ingliseks} >Muuda inglisekeelseks</button>
            {ingliseKeelne === "jah" && <div>Leht on inglisekeelne</div>}
        </div>
    )
}

export default Kontakt
