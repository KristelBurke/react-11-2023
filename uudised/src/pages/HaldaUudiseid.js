import React, { useState } from 'react';

function HaldaUudiseid() {
    const [uudised, HaldaUudiseid] = useState(JSON.parse(localStorage.getItem("uudised")) || []);

    const kustuta = (index) => {
        uudised.splice(index,1);
        HaldaUudiseid(uudised.slice());
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
  return (
    <div>
        <div>{uudised.map((uudis, index) => 
        <div>
            <div>{uudis}</div>
            <button onClick={() => kustuta(index)}>x</button>
        </div>
        )}
        </div>
    </div>
  );
}

export default HaldaUudiseid