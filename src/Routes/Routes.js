import React from "react";
import Feedback from "../components/feedback/Feedback";
import Todos from "../components/todos/Todos";
import { Route } from "react-router-dom";
// import connectReactRedux from "./connectReactRedux";

const Routes = ({ store }) => {
  return (
    <div>
      {/* <Route path="/" exact component={connectReactRedux} /> */}
      <Route
        path="/feedback"
        exact
        component={() => <Feedback store={store} />}
      />
      {/* <Route path="/feedback" component={() => <Feedback />} /> */}
      <Route path="/todos" exact component={() => <Todos store={store} />} />
    </div>
  );
};

export default Routes;
