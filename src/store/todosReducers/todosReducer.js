export default function contactsReducer(state = [], action) {
  switch (action.type) {
    case "addTODOs":
      return [...state, action.newTodos];
    case "removeSelectTODOs":
      return state.filter((todo) => todo.id !== action.currentID);
    case "toggleSelectTODOs":
      return state.map((todo) =>
        todo.id === action.taskID
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
