import {useRef, useState} from 'react';

function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!");
    const markRef =useRef();
    const mudelRef =useRef();
    const maksumusRef =useRef();
    // const [naitaNuppu, uuendaNaitaNuppu] = useState(true);
    
    function addProduct(){
        setMessage("Arvuti lisatud!");
        // uuendaNaitaNuppu(false);
        const newComputer = {
            "mark": markRef.current.value,
            "mudel": mudelRef.current.value,
            "maksumus": maksumusRef.current.value,
        }
        const computers = JSON.parse(localStorage.getItem("laptops")) || [];
        computers.push(newComputer);
        localStorage.setItem("laptops", JSON.stringify(computers));
    }

    return (
        <div>
            <div>Sonum: {message}</div>

            <label>Mark</label>
            <input ref={markRef} type="text"/>  
            <br/>
            <label>Mudel</label>
            <input ref={mudelRef} type="text"/>  
            <br/>
            <label>Maksumus</label>
            <input ref={maksumusRef} type="text"/>  
            <br/>
            { message === "Lisa arvuti!" && <button onClick={() => addProduct()}>Sisesta</button>}

        </div>
    )
}

export default LisaArvuti
