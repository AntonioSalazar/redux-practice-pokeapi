import React from "react";
import "./App.css";
import Pokemones from "./components/Pokemones";

import { Provider } from "react-redux";
import generateStore from "./redux/store";

const App = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
};

export default App;
