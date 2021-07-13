export default function feedbackReducer(
  state = { good: 0, medium: 0, bad: 0 },
  action
) {
  switch (action.type) {
    case "addGoodOpinion":
      return { ...state, good: state.good + 1 };
    case "addMediumOpinion":
      return { ...state, medium: state.medium + 1 };
    case "addBadOpinion":
      return { ...state, bad: state.bad + 1 };
    default:
      return state;
  }
}
