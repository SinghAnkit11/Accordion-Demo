import React, { useState } from "react";
import Buttons from "./Buttons";

const StockCount = () => {
    const [count, setCount]= useState(1);
    const CountMinus=()=>{
        setCount(count-1)
    }
    const CountPlus=()=>{
        setCount(count+1)
    }
   
    return (
        <>
        <div className="stock_counter">
            <Buttons children="Minus" counterHandler={CountMinus} radius={{borderRadius:'30px 0px 0px 30px'}} disabledBtn={count <= 0 ? 'disable_btn' : ''}>-</Buttons>
            <span>{count >= 0 ? count : 0}</span>
            <Buttons children="Plus" counterHandler={CountPlus} radius={{borderRadius:'0px 30px 30px 0px'}}>+</Buttons>
        </div>
        </>
    );
}

export default StockCount;