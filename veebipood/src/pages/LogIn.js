import React, { useRef, useState } from 'react'

function LogIn() {
    const isikukoodRef = useRef();
    const telefonRef = useRef();
    const [isikukoodKorrektne, setIsikukoodKorrektne] = useState(true);
    const [telefonKorrektne, setTelefonKorrektne] = useState(true);

    const isikukoodiKontroll = ()  => {
       //  alert(isikukoodRef.current.value);
       if (isikukoodRef.current.value.length === 11 && isikukoodRef.current.value[0] < 7) {
        setIsikukoodKorrektne(true);
       }else {
        setIsikukoodKorrektne(false);
       };
    }

    const telefoniKontroll = () => {
        // startsWith +372
        // .length 12 tahemarki
        if (telefonRef.current.value.length === 12 && isikukoodRef.current.value.startsWith("+372")) {
            setTelefonKorrektne(true);
           }else {
            setTelefonKorrektne(false);
           };
    }

    return (
        <div>
            <div>
                <label>Isikukood</label><br/>
                <input className={isikukoodKorrektne === false ? "red" : undefined } ref={ isikukoodRef } onChange={isikukoodiKontroll} type="text"/><br/>
                {isikukoodKorrektne === false && <div className="error">Isikukood on sisestatud valel kujul</div>}
                <br/>

                <label>Telefon</label><br/>
                <input className={telefonKorrektne === false ? "red" : undefined }  ref={ telefonRef } onChange={telefoniKontroll} type="text"/><br/>
                { telefonKorrektne === false &&  <div>Sisestatud telefoninumbri formaadis on viga. Telefoninumber peab olema kujul  +372XXXXXXXX</div>}
                <br/>

                <button disabled={telefonKorrektne === false || isikukoodKorrektne === false}>Logi sisse</button>
            </div>
        </div>
    )
}

export default LogIn
