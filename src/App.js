import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./components/Counter";
import Home from "./components/Home";
import { rootReducer } from "./redux";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>App</h1>
        <Counter />
        <Home />
      </Provider>
    </>
  );
};

export default App;
