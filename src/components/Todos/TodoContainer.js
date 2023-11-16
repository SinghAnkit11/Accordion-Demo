import React from "react";
import TodoItems from "./TodoItem";
const TodoContainer = (props) =>{
    return (
        <>
        <div className="todo_list">
                <ul>
                    {props.TodoContent.map((itemval, index) => {
                        return <TodoItems key={index} id={index} TodoContent={itemval} onSelect={props.dlt} />
                    } )}
                </ul>
            </div>
        </>
    );
}

export default TodoContainer;