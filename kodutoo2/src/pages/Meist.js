import { useState } from "react";

function Meist() {
    const [message, maaraMessage] = useState("Vali moni tegevus")
    return (
        <div>
            <br/>
            <button onClick={() => maaraMessage("Saada meile email jobs@html-css.com")}>Kandideeri toole</button>
            <button onClick={() => maaraMessage("Meil on 10 tootajat,kelle info ilmub veebilehele lahiajal")}>Meie tootajad</button>
            <button onClick={() => maaraMessage("Uhenduse votmiseks mine kontaktide lehele")}>Vota meiega uhendust</button>
            <br/>
            <br/>
            <div>{message}</div>
        </div>
    )
}

export default Meist
