const counter = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state;
    case "WATCH_USER":
      return state;
    default:
      return state;
  }
};
export default counter;
