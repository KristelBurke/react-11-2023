import React, { useState } from 'react';
import kasutajadFail from "../kasutajad.json";

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

    const reset = () => {
        uuendaKasutajad(kasutajadFail);
    }

    const name10Char = () => {
        const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(result);
    }

    const deleteByIndex = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index, 1);
        uuendaKasutajad(kasutajad.slice());
    }
    const findLucio = () => {
        const index = kasutajad.findIndex(user => user.email === "Lucio_Hettinger@annie.ca");
        console.log(index)
    }

    const findNameC = () => {
        const found = kasutajad.find(user => user.name.substring(0,1) === "C");
        console.log(found);
    }

    const sortByLat = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice());
    }

    const lngPositive = () => {
        const result = kasutajad.filter(user => user.address.geo.lng > 0);
        uuendaKasutajad(result);
    }

    const sumID = () => {
        let sum = 0;
        kasutajad.forEach(user => sum = sum + user.id);
        console.log(sum);
    }

    const addToPhone = () => {
        const result = kasutajad.map(user => ({...user, phone: "000-" + user.phone}));
        uuendaKasutajad(result);
    }

  return (
    <div>
        <div>{kasutajad.length}</div>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => name10Char()}>name10Char</button>
        <button onClick={() => findLucio()}>findLucio</button>
        <button onClick={() => findNameC()}>findNameC</button>
        <button onClick={() => sortByLat()}>sort Lat</button>
        <button onClick={() => lngPositive()}>Lng Positiivne</button>
        <button onClick={() => sumID()}>ID summa</button>
        <button onClick={() => sumID()}>ID summa</button>
        <button onClick={() => addToPhone()}>Add 000 to phone</button>


        <div>{kasutajad.map(kasutaja =>
            <div>
                <div>{kasutaja.id}</div>
                <div>{kasutaja.username}</div>
                <div>{kasutaja.email}</div>
                <div>{kasutaja.address.street}</div>
                <div>{kasutaja.address.suite}</div>
                <div>{kasutaja.address.city}</div>
                <div>{kasutaja.address.zipcode}</div>
                <div>{kasutaja.address.geo.lat}</div>
                <div>{kasutaja.address.geo.lng}</div>
                <div>{kasutaja.phone}</div>
                <div>{kasutaja.website}</div>
                <div>{kasutaja.company.name}</div>
                <div>{kasutaja.company.catchPhrase}</div>
                <div>{kasutaja.company.bs}</div>
                <button onClick={() => deleteByIndex()}>Kustuta jrknr</button>
                <br />
                <br />
            </div>)}
        </div>
    </div>
  )
}

export default Kasutajad