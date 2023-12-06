import {useState} from 'react'

function Color() {
   
    const [bgColor, setBgColor] = useState('lightblue');

    const changeColor = () => {
      const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon', 'lightpink'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    };
  
    return (
      <div>
        <div style={{ backgroundColor: bgColor, width: '200px', height: '200px', margin: '20px'}}></div>
        <button onClick={changeColor}>Change Color</button>
      </div>
    );
  }

export default Color
