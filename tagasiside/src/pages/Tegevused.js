import React, { useState } from 'react';
import tegevusteFail from "../tegevused.json";

function Tegevused() {
   const [tegevused, uuendaTegevused] = useState(tegevusteFail);



   const naitaKasutaja1 = () => {
    const vastus = tegevused.filter(element => element.userId === 1);
    uuendaTegevused(vastus)
   }

   const naitaKasutaja2 = () => {
    const vastus = tegevused.filter(element => element.userId === 2);
    uuendaTegevused(vastus)
   }

   const naitaKasutaja3 = () => {
    const vastus = tegevused.filter(element => element.userId === 3);
    uuendaTegevused(vastus)
   }

   const naitaValmisTegevusi = () => {
    const vastus = tegevused.filter(element => element.completed);
    uuendaTegevused(vastus)
   }

   const naitaTgaTegevusi = () => {
    const vastus = tegevused.filter(element => element.title.startsWith("t"));
    uuendaTegevused(vastus)
   }

   const naita20JarohkemTahte = () => {
    const vastus = tegevused.filter(element => element.title.length >= 20);
    uuendaTegevused(vastus)
   }

   const tegevusedTagasi = () => {
    uuendaTegevused(tegevusteFail);
    }

  return (
    <div>
        <button>Naita kogu tegevuste arvu .length abil</button>
        <button onClick={() => naitaKasutaja1()}>Kuva koik kasutaja ID 1 tegevused</button>
        <button onClick={() => naitaKasutaja2()}>Kuva koik kasutaja ID 2 tegevused</button>
        <button onClick={() => naitaKasutaja3()}>Kuva koik kasutaja ID 3 tegevused</button>
        <button onClick={() => naitaValmisTegevusi()}>Kuva koik valmis tegevused</button>
        <button onClick={() => naitaTgaTegevusi()}>Kuva koik T-tahega algavad tegevused</button>
        <button onClick={() => naita20JarohkemTahte()}>Kuva koik tegevused, millel on 20 voi rohkem tahemarki</button>
        <button onClick={() => tegevusedTagasi()}>Kuva koik tegevused</button>
        <br />
        {tegevused.map(element => 
        <div>
            <div>{element.userId}</div>
            <div>{element.id}</div>
            <div>{element.title}</div>
            <div>{element.completed}</div>
        </div>)}
    </div>
  )
}

export default Tegevused
