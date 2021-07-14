export default function incrementReducer(state = 0, { type, payload }) {
  switch (type) {
    case "Increment":
      return state + Number(payload);
    case "Decrement":
      return state - Number(payload);
    default:
      return state;
  }
}
