import React, { useState } from "react";

// const Counter = () => {
//     let [count, setCount] = useState(0);

//     function countNumber(){
//         return count >= 0 ? count : 'NaN';
//     }
//     function increment(){
//         setCount(++count);
//     }
//     function decrement(){
//         setCount(--count);
//     }

//     return(
//         <>
//             <h1>{countNumber()}</h1>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={increment}>Increment</button>
//         </>
//     )
// }

const Counter = () =>{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1);
        } else{
            setCount(0);
            alert("Sorry!!!, Negative values are not allowed!")
        }      
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter;