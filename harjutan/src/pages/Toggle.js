import {useState} from 'react'

function Toggle() {
    const [text, setText] = useState("Yes");
    const [buttonText, setButtonText] = useState("Toggle for NO");

    const changeText = () => {
       if (text === "Yes") {
           setText("No");
           setButtonText("Toggle for YES");
       } else {
           setText("Yes");
           setButtonText("Toggle for NO")
       }
    }

    return (
        <div>
            <br/>
            <p>{text}</p>
            <button onClick={changeText}>{buttonText}</button>
        </div>
    )
}

export default Toggle
