import React from 'react'
import { Link, } from "react-router-dom";

function NotFound () {
    return (
        <div>
            <h1>Lehte ei leitud</h1>
            
            <Link to="/avaleht">
                <button>Avalehele</button>
            </Link>
        </div>
    )
}

export default NotFound
