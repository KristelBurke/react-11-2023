import {useState} from 'react'

function Kogus() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <br/>
            <button onClick={increaseCount}> + </button>
            <p>{count}</p>
            <button onClick={decreaseCount}> - </button>
        </div>
    )
}

export default Kogus
