import { useState} from 'react';

function Seaded(){
    const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));

    const tumeLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "dark_mode");
        muudaKujundus("dark_mode");
    }
    const heleLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "light_mode");
        muudaKujundus("light_mode");
    }
    const coloredLeht = () => {
        localStorage.setItem("veebilehe_kujundus", "colored_mode");
        muudaKujundus("colored_mode");
    }

    return (
        <div>
            <br/>
            <button onClick={tumeLeht}>Tume leht</button>
            <button onClick={heleLeht}>Hele Leht</button>
            <button onClick={coloredLeht}>Varviline Leht</button>
            { kujundus === "dark_mode" && <div>Tume leht</div> }
            { kujundus === "light_mode" && <div>Hele leht</div> }
            { kujundus === "colored_mode" && <div>Varviline leht</div> }

        </div>
    );
}

export default Seaded
