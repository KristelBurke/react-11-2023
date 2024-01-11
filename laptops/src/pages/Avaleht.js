import React from 'react';

function Avaleht() {
    const computers =JSON.parse(localStorage.getItem("laptops")) || [];
    return (
        <div className="avaleht-text">
            <div>Tere!</div>
            <br/>
            <div>Siin lehel saad sulearvuteid vaadata ja lisada</div>

            {computers.map(oneComputer =>
            <div>
                <div>{oneComputer.mark}</div>
                <div>{oneComputer.mudel}</div>
                <div>{oneComputer.maksumus}</div>
                <button>Vajuta mind</button>
            </div>)}
        </div>
    )
}

export default Avaleht
