const initialState = {
    language: "en"
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHANGE_LANGUAGE":
        return {
          ...state,
          language: state.language,
        };
      default:
        return state;
    }
  };
  export default reducer;