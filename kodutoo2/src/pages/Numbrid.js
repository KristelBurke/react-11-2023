import React, { useState } from 'react'

function Numbrid() {
    const [numbers, setNumbers] = useState ([4, 23, 7, 8835, 39, 384, 19, 0, 9, 14, 135]);

    const reset = () => {
        setNumbers([4, 23, 7, 8835, 39, 384, 19, 0, 9, 14, 135])
    }

    const numbersAsc =() => {
        numbers.sort((a,b) => a - b );
        setNumbers(numbers.slice());
    }

    const numbersDesc =() => {
        numbers.sort((a,b) => b - a );
        setNumbers(numbers.slice());
    }

    const firstNumber =() => {
        numbers.sort((a,b) => a.toString().localeCompare(b.toString()))
        setNumbers(numbers.slice());
    }

    const firstNumberReverse =() => {
        numbers.sort((a,b) => b.toString().localeCompare(a.toString()))
        setNumbers(numbers.slice());
    }

    const biggerThan8 = () => {
        const filtered = numbers.filter(oneNumber => oneNumber > 8);
        setNumbers(filtered);
    }

    const smallerThan10 = () => {
        const filtered = numbers.filter(oneNumber => oneNumber < 10);
        setNumbers(filtered);
    }

    const evenNumbers = () => {
        const filtered = numbers.filter(oneNumber => oneNumber % 2 === 0);
        setNumbers(filtered);
    }

    const oddNumbers = () => {
        const filtered = numbers.filter(oneNumber => oneNumber % 2 !== 0);
        setNumbers(filtered);
    }

    const startingWithOne = () => {
        const filtered = numbers.filter(number => number.toString().startsWith('1'));
        setNumbers(filtered);
      };

      const includesThree = () => {
        const filtered = numbers.filter(number => number.toString().includes("3"));
        setNumbers(filtered);
      };

    return (
        <div>
            <br/>
            {numbers.map(element => <div>{element}</div>)}
            <br/>
            <button onClick={reset}>Reset</button>
            <br/><br/>
            <button onClick={numbersAsc}>Kasvavas jarjekorras</button>
            <button onClick={numbersDesc}>Kahanevas jarjekorras</button>
            <button onClick={firstNumber}>Esimese nr.jargi</button>
            <button onClick={firstNumberReverse}>Tagurpidi esimese nr.jargi</button>
            <br/> <br/>
            <button onClick={biggerThan8}>Suuremad, kui 8</button>
            <button onClick={smallerThan10}>Vaiksemad, kui 10</button>
            <button onClick={evenNumbers}>Paarisarvud</button>
            <button onClick={oddNumbers}>Paaritud arvud</button>
            <button onClick={startingWithOne}>Algavad 1-ga</button>
            <button onClick={includesThree}>Sisaldab 3</button>

        </div>
    )
}

export default Numbrid
