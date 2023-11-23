import React from 'react'

export default function Poed() {
    const poed = ["Ulemiste", "Viimsi", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Jarveotsa"]
    return (
        <div>
            {poed.map(element => <div>{element}</div>)}
        </div>
    )
}
