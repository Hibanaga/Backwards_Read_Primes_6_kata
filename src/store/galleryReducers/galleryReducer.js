export default function galleryReducer(state = [], { type, payload }) {
  switch (type) {
    case "uniqAddImages":
      return payload;
    case "addImages":
      return [...state, payload];
    default:
      return state;
  }
}
