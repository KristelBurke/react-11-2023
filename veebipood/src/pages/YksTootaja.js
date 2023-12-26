import React from 'react';
import { useParams } from 'react-router';
import tootajadFailist from '../data/tootajad.json';

function YksTootaja() {
    const { index } = useParams();
    const leitud = tootajadFailist[index];

    if (leitud === undefined) {
        return <div>Tootajat ei leitud</div>
    }

    return (
        <div>
            <div>Tootaja: {leitud.nimi}</div>
        </div>
    )
}

export default YksTootaja
