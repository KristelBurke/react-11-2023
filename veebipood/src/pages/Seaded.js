import { useState} from 'react'

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel"));

    const muudaKeelEst = () => {
        uuendaKeel("est");
        // siin panna ka LocalStorage'sse
        localStorage.setItem("keel" ,"est");
    }

    const muudaKeelEng = () => {
        uuendaKeel("eng");
        localStorage.setItem("keel","eng");
    }

    const muudaKeelRus = () => {
        uuendaKeel("rus");
        localStorage.setItem("keel","rus");
    }

    return (
        <div>
            { keel === "est" && <div>Leht on eesti keelne</div>}
            { keel === "eng" && <div>Page is in English</div>}
            { keel === "rus" && <div>Po russki</div>}
            <button onClick={muudaKeelEst}>Eesti keelseks</button>
            <button onClick={muudaKeelEng}>In English</button>
            <button onClick={muudaKeelRus}>Po russkji</button>
        </div>
    )
}

export default Seaded
