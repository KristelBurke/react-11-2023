import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Profiil() {
    const aadViide = useRef();
    const emailViide = useRef();
    const telViide = useRef();

    const [aadress, setAadres] = useState(localStorage.getItem("aadress") || "Sisestamata");
    const [email, setEmail] = useState(localStorage.getItem("email") ||"Sisestamata");
    const [telefon, setTelefon] = useState(localStorage.getItem("telefon") ||"Sisestamata");

    const sisestaAadress = () => {

        if (aadViide.current.value === "") {
            toast.error("Vali on kohustuslik");
            // alert("Vali on kohustuslik")
            return
        };

        if (aadViide.current.value[0].toLowerCase() === aadViide.current.value[0]) {
            toast.error("Peab algama suure algustahega");
            // alert("Peab algama suure algustahega")
            return
        };

        setAadres(aadViide.current.value); //muudab HTMLi
        localStorage.setItem("aadress", aadViide.current.value); //salvestab brauserisse
    }

    const sisestaEmail = () => {

        if (emailViide.current.value === "") {
            toast.error("Emaili vali on tuhi");
            //alert("Emaili vali on tuhi")
            return // <----- katkesta funktsioon, early return
        }

        if (emailViide.current.value.includes ("@") === false) {
            toast.error("Email peab sisaldama @");
            //alert("Emaili ei ole korrektne")
            return
        }

        if (emailViide.current.value.includes (".") === false) {
            toast.error("Email peab sisaldama .");
            //alert("Emaili ei ole korrektne")
            return
        }
        setEmail(emailViide.current.value);
        localStorage.setItem("email", emailViide.current.value);
    }

    const sisestaTelefon = () => {

        if (telViide.current.value === "") {
            toast.error("Telefoni sisestamine on kohustuslik");
            // alert("Telefoni sisestamine on kohustuslik")
            return
        }

        if (telViide.current.value.startsWith("+372") === "") {
            toast.error("Sisesta algusese Eesti suunakood");
            // alert("Sisesta algusese Eesti suunakood")
            return
        }

        setTelefon(telViide.current.value);
        localStorage.setItem("telefon", telViide.current.value);

    }
        // vasakpoolne on võti mille alusel salvestatakse (selle võtme abil pean võtma)
        // parempoolne on väärtus mida selle võtme taha salvestatakse

        // localStorage-st tuleb alati võtta ja panna, et oleks arendus loogiline
        // kui setItem teen, peab olema kuskil ka getItem
        // kui getItem teen, peab olema kuskil ka setItem
        // eraldiseisvalt neid pole mõtet teha


    return (
        <div>
            <br/>
            <div>Aadress: {aadress} </div>
            <div>Email: {email}</div>
            <div>Telefon: {telefon} </div>
            <br/>
            <label>Aadress</label> 
            <br/>
            <input ref={aadViide} type="text"/> 
            <br/>
            <button onClick={sisestaAadress}>Sisesta</button>
            <br/>
            <br/>

            <label>Email</label> 
            <br/>
            <input ref={emailViide} type="text"/>
            <br/>
            <button onClick={sisestaEmail}>Sisesta</button>
            <br/>
            <br/>

            <label>Telefon</label> 
            <br/>
            <input ref={telViide} type="text"/>
            <br/>
            <button onClick={sisestaTelefon}>Sisesta</button>
            <br/>
            <br/>

            <ToastContainer 
            position="bottom-right"
            theme="dark"/>
            
            
        </div>
    )
}

export default Profiil
