import React from "react";

const ToDoItem = ({
  id,
  name,
  completed,
  onHandleToggleCheckedTodos,
  onHandleDeleteTodos,
}) => {
  return (
    <div className="wrapperToDoItem">
      <div className="checkboxItem">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onHandleToggleCheckedTodos(id)}
        />
        <h2 className="titleName">{name}</h2>
      </div>

      <button onClick={() => onHandleDeleteTodos(id)}>delete</button>
    </div>
  );
};

export default ToDoItem;
