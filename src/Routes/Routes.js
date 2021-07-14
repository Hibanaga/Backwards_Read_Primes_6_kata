import React from "react";
import Feedback from "../components/feedback/Feedback";
import Todos from "../components/todos/Todos";
import { Route } from "react-router-dom";
import PhoneBook from "../components/phonebook/PhoneBook";
import Increment from "../components/Increment/Increment";
import ImageGallery from "../components/imageGallery/ImageGallery";

const Routes = () => {
  return (
    <div>
      <Route path="/increment" exact component={Increment} />
      <Route path="/feedback" exact component={Feedback} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/phonebook" exact component={PhoneBook} />
      <Route path="/imageGallery" exact component={ImageGallery} />
    </div>
  );
};

export default Routes;
