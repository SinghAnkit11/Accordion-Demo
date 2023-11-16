import React from "react";

const Buttons = (props) =>{
    
    return(
        <>
        <button onClick={props.counterHandler} style={props.radius} className={props.disabledBtn}>
            {props.children}
        </button>
        </>
    );
}

export default Buttons;