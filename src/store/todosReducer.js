import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducers/feedbackReducer";
import incrementReducer from "./incrementReducers/incrementReducer";
import phonebookReducer from "./phonebookReducers/phonebookReducer";
import todosReducer from "./todosReducers/todosReducer";

let rootReducer = combineReducers({
  feedback: feedbackReducer,
  todos: todosReducer,
  phonebook: phonebookReducer,
  increment: incrementReducer,
});

export default rootReducer;
