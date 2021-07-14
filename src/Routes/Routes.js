import React from "react";
import Feedback from "../components/feedback/Feedback";
import Todos from "../components/todos/Todos";
import { Route } from "react-router-dom";
import PhoneBook from "../components/phonebook/PhoneBook";

const Routes = () => {
  return (
    <div>
      <Route path="/feedback" exact component={Feedback} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/phonebook" exact component={PhoneBook} />
    </div>
  );
};

export default Routes;
