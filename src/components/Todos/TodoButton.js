import React from "react";

const TodoButton = (props) =>{
    return(
        <>
        <button className="close_btn" onClick={() => {props.deleteItem(props.id)}}>
            <i className="fa fa-times"></i>
        </button>
        </>
    );
}

export default TodoButton;