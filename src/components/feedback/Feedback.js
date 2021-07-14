import React from "react";
import { connect } from "react-redux";

const Feedback = ({
  good,
  medium,
  bad,
  onHandleGoodOpinion,
  onHnadleMediumOpinion,
  ohHandleBadOpinion,
}) => {
  let sumOpinion = good + medium + bad;

  return (
    <div className="wrapperOpinion">
      <ul className="ulMenuOpinion">
        <li className="liItemMenuOpinion">good:{good}</li>
        <li className="liItemMenuOpinion">medium:{medium}</li>
        <li className="liItemMenuOpinion">bad:{bad}</li>
      </ul>
      <button className="js-btn" onClick={onHandleGoodOpinion}>
        good
      </button>
      <button className="js-btn" onClick={onHnadleMediumOpinion}>
        medium
      </button>
      <button className="js-btn" onClick={ohHandleBadOpinion}>
        bad
      </button>

      {sumOpinion > 0 ? (
        <>
          <h2 className="titleInfoOpinion">
            percentage of positive opinion:{" "}
            {((good / sumOpinion) * 100).toFixed(2)}
          </h2>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  good: state.feedback.good,
  medium: state.feedback.medium,
  bad: state.feedback.bad,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleGoodOpinion: () => dispatch({ type: "addGoodOpinion" }),
  onHnadleMediumOpinion: () => dispatch({ type: "addMediumOpinion" }),
  ohHandleBadOpinion: () => dispatch({ type: "addBadOpinion" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
