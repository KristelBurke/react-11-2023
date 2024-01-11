import React, { Link } from 'react';

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return (
        <div>
            <div>See on uudiste leht, nahtav localhost:3000/uudised aadressil</div>
            {uudised.length === 0 && <div>Uhtegi uudist hetkel pole. Lisame varsti.</div>}
            <div>{uudised.map((uudis, index) => 

            <Link to={"/uudis/" + index}>
                <div>{uudis}</div>
            </Link>
            
            )}</div>
        </div>
    )
}

export default Uudised
