import React from "react";
import Feedback from "../components/feedback/Feedback";
import Todos from "../components/todos/Todos";
import { Route } from "react-router-dom";

const Routes = ({ store }) => {
  return (
    <div>
      <Route path="/feedback" component={() => <Feedback store={store} />} />
      <Route path="/todos" component={() => <Todos store={store} />} />
    </div>
  );
};

export default Routes;
