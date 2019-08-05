let reducer = (state, action) => {
  switch (action.type) {
    case "set-state":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;