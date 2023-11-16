import React from "react";
import TodoButton from "./TodoButton";

const TodoItems = (props) => {
  return (
    <>
      <li>
        <TodoButton deleteItem={props.onSelect} id={props.id}  />
        {/* <button className="close_btn" onClick={() => {props.onSelect(props.id)}}>
            <i className="fa fa-times"></i>
            </button> */}
        {props.item}
      </li>
    </>
  );
};
export default TodoItems;
