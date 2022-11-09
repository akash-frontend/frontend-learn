import React, { useState } from 'react'
import "./index.css";
function List() {
    const getItems = () => {
        console.log("%c getItems called", "color:royalblue");
        return Array(50).fill(0);
    }

    const [items, setItems] = useState(getItems());

    return (
        <div className='card'>
            <ul>
                {items.map((item, index) => <li key={index}>{index + 1}</li>)}
            </ul>
            <button onClick={() => setItems([...items,0])}>Add item</button>
        </div>
    )
}

export default List


// setItems([...items,0])
// it means along with items add 1 more item in the list 
// we can write any number doesn't matter in this second parameter


// setItems([...items,8,5])
// it means along with items add 2 more items in the list 
