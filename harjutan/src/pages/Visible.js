import {useState} from 'react'

function Visible() {
    const [visible, setVisible] = useState(false);

    const textVisible = () => {
       setVisible(!visible); 
    }
    
    return (
        <div>
            <br/>
            { visible && <p>Now you see me :)</p> }
            <button onClick={textVisible}>Click</button>
        </div>
    )
}

export default Visible
