import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../../redux/counter/actions";

const Counter = ({ increment, decrement, count }) => {
  const inc = () => {
    increment();
  };

  const dec = () => {
    decrement();
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={dec}>-</button>
        <span>{count}</span>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.counter.count });

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
