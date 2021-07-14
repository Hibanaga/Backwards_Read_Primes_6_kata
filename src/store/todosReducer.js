import { combineReducers } from "redux";
import feedbackReducer from "./feedbackReducers/feedbackReducer";
import galleryReducer from "./galleryReducers/galleryReducer";
import incrementReducer from "./incrementReducers/incrementReducer";
import phonebookReducer from "./phonebookReducers/phonebookReducer";
import todosReducer from "./todosReducers/todosReducer";

let rootReducer = combineReducers({
  feedback: feedbackReducer,
  todos: todosReducer,
  phonebook: phonebookReducer,
  increment: incrementReducer,
  gallery: galleryReducer,
});

export default rootReducer;
