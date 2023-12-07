import React, { useState } from 'react'

function Months() {
     const [months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);
     const [isEmpty, setIsEmpty] = useState(false);

     const clearMonths = () => {
        setMonths([]);
        setIsEmpty(true);
      };

    return (
        <div>
            <br/>
            <div>Number of items in the array: {months.length}</div>
            {months.map(element => <div>{element}</div>)}
            <button onClick={clearMonths}>Empty</button>
            {isEmpty && <div>List is empty</div>}
        </div>
    )
}

export default Months

