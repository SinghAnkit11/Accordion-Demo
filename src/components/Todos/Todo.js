import React, { useState } from "react";
import TodoItems from "./TodoItem";

const TodoApp = () => {
  const [inputs, setInputs] = useState("");
  const [item, setItem] = useState([]);
  const [error, setError] = useState("error_message ");
  // let [container, setContainer]= useState('todo_list ')

  const changeEvent = (e) => {
    setInputs(e.target.value);
    // console.log(inputs);
  };

  // let displayTodo = 'todo_list ';
  // displayTodo += !item ? 'show' : 'hide';

  const addTodo = (event) => {
    event.preventDefault();
    if (inputs) {
      setItem((oldItems) => {
        return [...oldItems, inputs];
      });
      // setContainer(container + 'show');
    } 
    else {
      setError(error + "show");
      setTimeout(() => {
        setError(error + "");
      }, 2000);
    }
    setInputs("");
  };

  const deleteTodo = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((array, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <form className="todo_container" onSubmit={addTodo}>
        <div className="todo_input_button">
          <input
            type="text"
            placeholder="Add your task"
            value={inputs}
            onChange={changeEvent}
          />
          <button type="submit">Add</button>
        </div>
        <p className={error}>Please Enter Something!</p>

        {item.map((itemval, index) => {
          return (
            <div className="todo_list">
                  <ul>
                    <TodoItems
                      key={index}
                      id={index}
                      item={itemval}
                      onSelect={deleteTodo}
                    />
                  </ul>
                </div>
          )
        })}
      </form>
    </>
  );
};

export default TodoApp;
