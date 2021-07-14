import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducers/feedbackReducer";
import phonebookReducer from "./phonebookReducers/phonebookReducer";
import todosReducer from "./todosReducers/todosReducer";

let rootReducer = combineReducers({
  feedback: feedbackReducer,
  todos: todosReducer,
  phonebook: phonebookReducer,
});

export default rootReducer;
