import React, { useState } from "react";
import { connect } from "react-redux";
import "./increment.scss";

function Increment({ counter, onIncrement, onDecrement }) {
  const [step, setStep] = useState(1);
  const steps = [1, 5, 10, 15, 25, 50];

  const onHandleDecrement = () => {
    onDecrement(step);
  };

  const onHandleIncrement = () => {
    onIncrement(step);
  };

  const handleChangeSelect = (event) => {
    setStep(event.target.value);
  };

  return (
    <div className="wrapperIncrement">
      <div className="counterInfo">
        <button
          className="js-btnCounter js-btn-minus"
          onClick={onHandleDecrement}
        >
          decrement (-)
        </button>

        <h1 className="titleCounterIncrement">{counter}</h1>

        <button
          className="js-btnCounter js-btn-plus"
          onClick={onHandleIncrement}
        >
          increment (+)
        </button>
      </div>

      <div className="selectCounter">
        <select name="" id="" onChange={handleChangeSelect}>
          {steps.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.increment,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch({ type: "Increment", payload: step }),
  onDecrement: (step) => dispatch({ type: "Decrement", payload: step }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Increment);
