import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./Components/ToDoItem";

const Todos = ({ store }) => {
  let { todos } = store.getState();
  const [todo, setTodo] = useState(todos);
  const [todosText, setTodosText] = useState("");

  let handleChangeInput = (event) => {
    setTodosText(event.target.value);
  };

  let handleSubmitTodos = (event) => {
    event.preventDefault();
    let itemTODO = { id: uuidv4(), nameToDo: todosText, completed: false };

    store.dispatch({
      type: "addTODOs",
      newTodos: itemTODO,
    });
  };

  let handleDeleteTodos = (taskID) => {
    store.dispatch({ type: "removeSelectTODOs", currentID: taskID });
  };

  let handleToggleCheckedTodos = (taskID) => {
    store.dispatch({
      type: "toggleSelectTODOs",
      taskID: taskID,
    });
  };

  useEffect(() => {
    return () => {
      setTodo([]);
    };
  }, []);

  store.subscribe(() => {
    let { todos } = store.getState();
    setTodo(todos);
  });

  return (
    <div>
      <form action="" className="inputFormName" onSubmit={handleSubmitTodos}>
        <input type="text" value={todosText} onChange={handleChangeInput} />
        <button type="submit">send</button>
      </form>

      {todo.map(({ id, nameToDo, completed }) => (
        <ToDoItem
          key={id}
          id={id}
          name={nameToDo}
          completed={completed}
          onHandleToggleCheckedTodos={handleToggleCheckedTodos}
          onHandleDeleteTodos={handleDeleteTodos}
        />
      ))}
    </div>
  );
};

export default Todos;
