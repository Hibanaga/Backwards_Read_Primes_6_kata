export default function phonebookReducer(state = [], { type, payload }) {
  switch (type) {
    case "addContact":
      return [...state, payload];
    case "removeContact":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
}
