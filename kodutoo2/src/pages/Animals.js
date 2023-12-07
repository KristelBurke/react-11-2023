import React, { useState} from 'react'

function Animals() {
    const [animals, setAnimals] = useState(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]);
    const [isEmpty, setIsEmpty] = useState(false);

    const clearAnimals = () => {
        setAnimals([]);
        setIsEmpty(true);
      };

    return (
        <div>
            <p>Animals</p>
            <div>Number of animals: {animals.length}</div>
            {animals.map(element => <div>{element}</div>)}
            <button onClick={clearAnimals}>Empty</button>
            {isEmpty && <div>No animals to show</div>}
        </div>
    )
}

export default Animals
