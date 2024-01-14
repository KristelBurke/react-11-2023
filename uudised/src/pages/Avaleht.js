import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Avaleht() {
    const [postitused, uuendaPostitused] = useState([]);

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
   }, []);

    return (
        <div>
            <div>See on avaleht, nahtav localhost:3000 aadressil</div>
            <img className="pilt" src="https://wallpapers.com/images/hd/summer-background-zh8tgpq7gl5i3sbq.jpg" alt=""/>
            {postitused.map(element => 
            <div>
                <div><i>{element.userId}</i></div>
                <div><u>{element.id}</u></div>
                <div><b>{element.title}</b></div>
                <div>{element.body}</div>
                <Link to={"kasutaja-postitus/" + element.userId}>
                    <button>Koik kasutaja postitused</button>
                </Link>
            </div>
            
            )}
        </div>
    );
}

export default Avaleht