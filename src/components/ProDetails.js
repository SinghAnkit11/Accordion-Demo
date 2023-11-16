import React from "react";

const ProDetails = (props) =>{
    return(
        <>
            <h3>{props.proTitle}</h3>
            <p>{props.proText}</p>
        </>
    );
}
export default ProDetails;