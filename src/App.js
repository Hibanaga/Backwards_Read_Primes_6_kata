import React from "react";

import Links from "./Routes/Links";
import Routes from "./Routes/Routes";

const App = ({ store }) => {
  return (
    <div>
      <Links />
      <Routes store={store} />
    </div>
  );
};

export default App;
