export default function galleryReducer(state = [], { type, payload }) {
  switch (type) {
    case "addImages":
      return [...state, payload];
    default:
      return state;
  }
}
