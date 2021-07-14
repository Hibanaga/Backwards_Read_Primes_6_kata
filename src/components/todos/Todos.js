import React, { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./Components/ToDoItem";

const Todos = ({
  todos,
  onHandleAddTodos,
  onHandleDeleteTodos,
  onToggleHandleCheckbox,
}) => {
  const [todoText, setTodoText] = useState("");
  const handleSubmitTodos = (event) => {
    event.preventDefault();
    onHandleAddTodos({ id: uuidv4(), text: todoText, completed: false });
  };

  const handleTodosText = (event) => {
    setTodoText(event.target.value);
  };

  const handleToggleCheckedTodos = (taskID) => {
    onToggleHandleCheckbox(taskID);
  };

  const handleDeleteTodos = (taskID) => {
    onHandleDeleteTodos(taskID);
  };

  return (
    <div>
      <form action="" className="inputFormName" onSubmit={handleSubmitTodos}>
        <input type="text" value={todoText} onChange={handleTodosText} />
        <button type="submit">send</button>
      </form>

      {todos.map(({ id, text, completed }) => (
        <ToDoItem
          key={id}
          id={id}
          name={text}
          completed={completed}
          onHandleToggleCheckedTodos={handleToggleCheckedTodos}
          onHandleDeleteTodos={handleDeleteTodos}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleAddTodos: (todo) => dispatch({ type: "addTODOs", newTodos: todo }),
  onHandleDeleteTodos: (taskID) =>
    dispatch({ type: "removeSelectTODOs", currentID: taskID }),
  onToggleHandleCheckbox: (taskID) =>
    dispatch({ type: "toggleSelectTODOs", taskID: taskID }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
