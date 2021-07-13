import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducers/feedbackReducer";
import todosReducer from "./todosReducers/todosReducer";

let rootReducer = combineReducers({
  feedback: feedbackReducer,
  todos: todosReducer,
});

export default rootReducer;
