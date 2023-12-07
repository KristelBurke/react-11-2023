import React, { useState} from 'react'

function Words() {
    const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);
    const [isEmpty, setIsEmpty] = useState(false);

    const clearWords = () => {
        setWords([]);
        setIsEmpty(true);
      };
    return (
        <div>
            <p>Words</p>
            <div>Number of animals: {words.length} </div>
            {words.map(element => <div>{element}</div>)}
            <button onClick={clearWords}>Empty</button>
            {isEmpty && <div>No words</div>}
        </div>
    )
}

export default Words
