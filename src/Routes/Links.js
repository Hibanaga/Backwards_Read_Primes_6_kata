import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <div className="wrapperLinks">
      <NavLink to="/" exact activeClassName="activeNavLink">
        Home
      </NavLink>
      <NavLink to="/increment" activeClassName="activeNavLink">
        Increment
      </NavLink>
      <NavLink to="/feedback" activeClassName="activeNavLink">
        Feedback
      </NavLink>
      <NavLink to="/todos" activeClassName="activeNavLink">
        Todo
      </NavLink>
      <NavLink to="/phonebook" activeClassName="activeNavLink">
        Phonebook
      </NavLink>
      <NavLink to="/imageGallery" activeClassName="activeNavLink">
        Gallery
      </NavLink>
    </div>
  );
};

export default Links;
