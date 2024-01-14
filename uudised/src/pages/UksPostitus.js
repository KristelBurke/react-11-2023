import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UksPostitus() {
    const { postituseId } = useParams();
    const [postitus, uuendaPostitus] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postituseId)
        .then(res => res.json())
        .then(data => uuendaPostitus(data))
    }, [postituseId]);

  return (
    <div>
        <div>
            <div>{postitus.userId}</div>
            <div>{postitus.id}</div>
            <div>{postitus.title}</div>
            <div>{postitus.body}</div>
        </div>
    </div>
  )
}

export default UksPostitus