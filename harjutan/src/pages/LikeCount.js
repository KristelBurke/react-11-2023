import {useState}from 'react'

function LikeCount() {
   const [count, setCount] = useState(0);

   const countLike = () => {
    setCount(count + 1)
   }
  
    return (
        <div>
            <br/>
            <p>{count}</p>
            <button onClick={countLike}>Like</button>
        
        </div>
    )
}

export default LikeCount
