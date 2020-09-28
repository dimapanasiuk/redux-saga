import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import { rootReducer } from "./redux";

const store = createStore(rootReducer);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>App</h1>
        <Counter />
      </Provider>
    </>
  );
};

export default App;
