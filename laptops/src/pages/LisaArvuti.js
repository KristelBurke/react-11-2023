import {useState} from 'react';

function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!");
    const [naitaNuppu, uuendaNaitaNuppu] = useState(true);
    
    function addProduct(){
        setMessage("Arvuti lisatud!");
        uuendaNaitaNuppu(false);
    }

    return (
        <div>
            <div>Sonum: {message}</div>

            <label>Mark</label>
            <input type="text"/>  
            <br/>

            <label>Mudel</label>
            <input type="text"/>  
            <br/>

            <label>Maksumus</label>
            <input type="text"/>  
            <br/>

            { naitaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button>}

        </div>
    )
}

export default LisaArvuti
