import { useState} from 'react'

function Tagasiside() {
    const [tagasisided, maaraTagasisided] = useState (["Oli hea", "Huvitav", "Teistsugune", "Ponev"])
    return (
        <div>
            Tagasisided:{tagasisided.map(element => <div>{element}</div>)}
        </div>
    )
}

export default Tagasiside
