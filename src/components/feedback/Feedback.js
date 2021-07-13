import React, { useState } from "react";

const Feedback = ({ store }) => {
  let { feedback } = store.getState();

  let [good, setGood] = useState(feedback.good);
  let [medium, setMedium] = useState(feedback.medium);
  let [bad, setBad] = useState(feedback.bad);

  let handleGoodOpinion = () => {
    store.dispatch({ type: "addGoodOpinion" });
  };

  let handleMediumOpinion = () => {
    store.dispatch({ type: "addMediumOpinion" });
  };

  let handleBadOpinion = () => {
    store.dispatch({ type: "addBadOpinion" });
  };

  store.subscribe(() => {
    let { feedback } = store.getState();
    let { good, medium, bad } = feedback;
    setGood(good);
    setMedium(medium);
    setBad(bad);
  });

  return (
    <div className="wrapperOpinion">
      <ul className="ulMenuOpinion">
        <li className="liItemMenuOpinion">good:{good}</li>
        <li className="liItemMenuOpinion">medium:{medium}</li>
        <li className="liItemMenuOpinion">bad:{bad}</li>
      </ul>

      <button className="js-btn" onClick={handleGoodOpinion}>
        good
      </button>
      <button className="js-btn" onClick={handleMediumOpinion}>
        medium
      </button>
      <button className="js-btn" onClick={handleBadOpinion}>
        bad
      </button>

      {good + medium + bad > 0 && (
        <>
          {" "}
          <h2 className="titleInfoOpinion">
            percent of positive opinion:{" "}
            {(good / (good + medium + bad)).toFixed(2) * 100}%
          </h2>{" "}
        </>
      )}
    </div>
  );
};

export default Feedback;
